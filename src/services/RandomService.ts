class RandomService {
  getRandomBoolean() {
    return Math.random() > 0.5;
  }
}

export const randomService = new RandomService();
