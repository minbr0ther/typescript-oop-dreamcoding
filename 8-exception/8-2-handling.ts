{
  class TimeoutError extends Error {}

  class OfflineError extends Error {}

  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  };
  type SuccessState = {
    result: 'success';
  };

  // 예상할 수 있는 성공과 실패 상태를 타입으로 정의하는 것이
  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryconnect(): ResultState {}
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryconnect();
      // login ...
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to user
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
