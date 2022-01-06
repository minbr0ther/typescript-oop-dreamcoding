{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  const printLoginState = (loadState: ResourceLoadState) => {
    switch (loadState.state) {
      case 'loading':
        console.log(`👀 ${loadState.state}...`);
        break;
      case 'success':
        console.log(`😀 ${loadState.response.body}`);
        break;
      case 'fail':
        console.log(`😱 ${loadState.reason}`);
        break;
      default:
        throw Error(`unknown state: ${loadState}`);
    }
  };

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
