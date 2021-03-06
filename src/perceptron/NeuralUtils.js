export class NeuralUtils {
  constructor() {}

  sigmoid(x) {
    return 1 / (1 + Math.exp(-x))
  }

  get rates() {
    return {
      IS_THE_DESIRED_CANDIDATE: 1,
      IS_NOT_THE_DESIRED_CANDIDATE: 0,
    }
  }
}
