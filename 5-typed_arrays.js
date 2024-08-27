export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const Buf = new ArrayBuffer(length);
  const int8 = new Int8Array(Buf);
  int8.set(position, value);
  return int8;
}
