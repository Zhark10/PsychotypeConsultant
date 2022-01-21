export class NeuralUtils {
  constructor() { }

  sigmoid(x) {
    return Number((1 / (1 + Math.exp(-x))).toFixed(2));
  }

  get rates() {
    return {
      IS_THE_DESIRED_CANDIDATE: 1,
      IS_NOT_THE_DESIRED_CANDIDATE: 0
    }
  }
}