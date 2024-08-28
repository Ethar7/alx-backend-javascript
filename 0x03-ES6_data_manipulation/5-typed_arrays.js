function createInt8TypedArray(length, position, value) {
    // Create a new ArrayBuffer with the specified length
    const Buf = new ArrayBuffer(length);
    // Create a DataView to manipulate the buffer
    const view = new DataView(Buf);

    // Check if the position is within the valid range
    if (position >= length || position < 0) {
        throw new Error('Position outside range');
    }
    // Set the Int8 value at the specified position
    view.setInt8(position, value);

    return view;
}
