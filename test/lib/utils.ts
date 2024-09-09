export async function wait(milliseconds: number) {
  return await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

// ref: https://github.com/vueuse/vueuse/blob/5478f78e6058d169181549b9cc5f2fbf4e2bf8e4/packages/.test/nextTick.ts
export function nextTwoTick() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      setTimeout(resolve);
    });
  });
}
