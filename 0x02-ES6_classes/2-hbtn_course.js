export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string' || typeof length !== 'number' || !Array.isArray(students)) {
      throw new Error('invalid input type');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }
  
  set name(val) {
    if (typeof name !== 'string') {
      throw new Error('invalid input type');
    }
    this._name = val;
  }

  get length() {
    return this._length;
  }
  
  set length(val) {
    if (typeof length !== 'number') {
      throw new Error('invalid input type');
    }
    this._length = val;
  }

  get students() {
    return this._students;
  }
  
  set students(val) {
    if (!Array.isArray(students)) {
      throw new Error('invalid input type');
    }
    this._students = val;
  }
}
