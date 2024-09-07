export async function wait(milliseconds: number) {
  return await new Promise((resolve) => setTimeout(resolve, milliseconds));
}
