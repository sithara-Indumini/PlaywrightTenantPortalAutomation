//import axios from 'axios';
import dotenv from 'dotenv';
import axios, { isAxiosError } from 'axios';



dotenv.config();

const credentials = process.env.SYSTEM_ACCESSTOKEN
    ? Buffer.from(`:${process.env.SYSTEM_ACCESSTOKEN}`).toString('base64')
    : Buffer.from(`${process.env.AZURE_DEVOPS_USER}:${process.env.AZURE_DEVOPS_PASS}`).toString('base64');

class AzureDevOps {
    constructor() { }

    async updateTestCaseStatus(testCaseId: string, testCaseStatus: string): Promise<void> {
        try {
            const testPlanId = process.env.TEST_PLAN_ID as string;
            const testSuiteId = process.env.TEST_SUITE_ID as string;

            // Validate and normalize status
            const normalizedStatus = testCaseStatus.toLowerCase();
            const allowedStatuses = ['passed', 'failed', 'blocked', 'notapplicable'];
            if (!allowedStatuses.includes(normalizedStatus)) {
                throw new Error(`Invalid status: ${testCaseStatus}`);
            }

            const testPointId = await this.getTestPoint(testPlanId, testSuiteId, testCaseId);
            await this.updateTestPointStatus(testPlanId, testSuiteId, testPointId, normalizedStatus);
            console.log(`Updated Test Case ID - ${testCaseId} as ${normalizedStatus} in test plan`);
        } catch (error) {
            console.error('Error in updating test case status:', error);
            throw error;
        }
    }

    async getTestPoint(testPlanId: string, testSuiteId: string, testCaseId: string): Promise<string> {
        const values = [testPlanId, testSuiteId, testCaseId];
        let URL = process.env.TEST_PLAN_GET_API!.replace(/{(\d+)}/g, (match, number) => values[number] || match);
        // Ensure API version is included
        if (!URL.includes('api-version')) {
            URL += URL.includes('?') ? '&' : '?';
            URL += 'api-version=7.1-preview.2';
        }

        try {
            const response = await axios.get(URL, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Basic ${credentials}`
                },
            });
            if (!response.data.value || response.data.value.length === 0) {
                throw new Error(`No test point found for test case ${testCaseId}`);
            }
            return response.data.value[0].id;
        } catch (error: unknown) {
            if (isAxiosError(error)) {
                console.error('Error fetching test point:', {
                    url: URL,
                    error: error.response?.data || error.message
                });
            }
            else if (error instanceof Error) { console.error('Native error:', error.message); } else { console.error('Unknown error:', error); }

            throw error;
        }
    }

    async updateTestPointStatus(testPlanId: string, testSuiteId: string, testPointId: string, testCaseStatus: string): Promise<void> {
        const values = [testPlanId, testSuiteId, testPointId];
        let URL = process.env.TEST_PLAN_PATCH_API!.replace(/{(\d+)}/g, (match, number) => values[number] || match);
        // Ensure API version is included
        if (!URL.includes('api-version')) {
            URL += URL.includes('?') ? '&' : '?';
            URL += 'api-version=7.1-preview.2';
        }

        const requestBody = [
            {
                id: testPointId,
                results: {
                    outcome: testCaseStatus
                }
            }
        ];

        try {
            const response = await axios.patch(URL, requestBody, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Basic ${credentials}`
                }
            });
            if (response.status !== 200) {
                throw new Error(`Unexpected status code: ${response.status}`);
            }
        } catch (error: unknown) {
            if (isAxiosError(error)) {
                console.error('Error updating test point:', {
                    url: URL,
                    requestBody: requestBody,
                    status: error.response?.status,
                    responseData: error.response?.data,
                    config: error.config
                });
            }
            else if (error instanceof Error) { console.error('Native error:', error.message); } else { console.error('Unknown error:', error); }

            throw error;
        }
    }
}

export default AzureDevOps;