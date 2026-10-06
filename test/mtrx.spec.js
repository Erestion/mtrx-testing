const { expect } = require('chai');
const Mtrx = require('mtrx');

describe('Mtrx Library Test Suite', () => {

  describe('Matrix Creation & Properties', () => {
    it('should create an identity matrix correctly', () => {
      // Create a 2x2 identity matrix
      const identity = Mtrx.eye(2);
      expect(identity).to.be.an.instanceof(Mtrx);
      expect(identity.rows).to.equal(2);
      expect(identity.cols).to.equal(2);
      expect(identity[0][0]).to.equal(1);
      expect(identity[0][1]).to.equal(0);
      expect(identity[1][0]).to.equal(0);
      expect(identity[1][1]).to.equal(1);
    });

    it('should create a zero matrix of given dimensions', () => {
      // Create a 2x3 matrix filled with zeros
      const zeros = Mtrx.zeros(2, 3);
      expect(zeros.rows).to.equal(2);
      expect(zeros.cols).to.equal(3);
      zeros.forEach(row => {
        row.forEach(val => expect(val).to.equal(0));
      });
    });

    it('should construct matrix correctly from 2D array', () => {
      // Initialize matrix from existing array data
      const data = [[1, 2], [3, 4]];
      const m = new Mtrx(data);
      expect(m.rows).to.equal(2);
      expect(m.cols).to.equal(2);
      expect(m[1][0]).to.equal(3);
    });
  });

  describe('Matrix Arithmetic Operations', () => {
    let m1;
    let m2;

    beforeEach(() => {
      // Reset matrix instances before each test case
      m1 = new Mtrx([[1, 2], [3, 4]]);
      m2 = new Mtrx([[5, 6], [7, 8]]);
    });

    it('should correctly calculate the sum of two matrices', () => {
      // Perform element-wise addition
      const result = Mtrx.add(m1, m2);
      expect(result).to.deep.equal(new Mtrx([[6, 8], [10, 12]]));
    });

    it('should correctly calculate matrix multiplication', () => {
      // Perform standard matrix dot product
      const result = Mtrx.mul(m1, m2);
      // Row 0: [1*5 + 2*7, 1*6 + 2*8] = [19, 22]
      // Row 1: [3*5 + 4*7, 3*6 + 4*8] = [43, 50]
      expect(result[0][0]).to.equal(19);
      expect(result[0][1]).to.equal(22);
      expect(result[1][0]).to.equal(43);
      expect(result[1][1]).to.equal(50);
    });

    it('should throw or return invalid result when multiplying incompatible matrices', () => {
      // Incompatible dimensions: (2x2) * (3x2)
      const incompatible = new Mtrx([[1, 2], [3, 4], [5, 6]]);
      expect(() => Mtrx.mul(m1, incompatible)).to.throw(TypeError);
    });
  });

  describe('Transformations', () => {
    it('should transpose a rectangular matrix', () => {
      // Initialize a 2x3 matrix
      const rect = new Mtrx([
        [1, 2, 3],
        [4, 5, 6]
      ]);

      // zhufuge/Mtrx exposes transposition via Mtrx.T() or rect.T
      const transposed = typeof Mtrx.T === 'function' 
        ? Mtrx.T(rect) 
        : (typeof rect.T === 'function' ? rect.T() : rect.T);

      // Verify dimensions
      expect(transposed.length).to.equal(3);
      expect(transposed[0].length).to.equal(2);

      // Verify transposed values
      expect(transposed).to.deep.equal(new Mtrx([
        [1, 4],
        [2, 5],
        [3, 6]
      ]));
    });
  });

});