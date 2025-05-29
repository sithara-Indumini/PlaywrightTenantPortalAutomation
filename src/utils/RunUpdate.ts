import { updateTestCaseStatusInTestPlan } from '../../src/utils/Common';

async function run() {
  try {
    await updateTestCaseStatusInTestPlan();
  } catch (error) {
    console.error('Error executing updateTestCaseStatusInTestPlan:', error);
    console.log('TEST_PLAN_ID:', process.env.TEST_PLAN_ID);
    console.log('TEST_SUITE_ID:', process.env.TEST_SUITE_ID);
    //console.log('Test Case ID:', testCaseId);

  }
}

run();