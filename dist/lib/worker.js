var n = Object.defineProperty;
var w = (s, r, o) => r in s ? n(s, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : s[r] = o;
var e = (s, r, o) => w(s, typeof r != "symbol" ? r + "" : r, o);
class h {
  constructor(r, o) {
    e(this, "_worker", null);
    this.workerConstructor = r, this.options = o;
  }
  async invoke(r) {
    return this._worker == null && (this._worker = new this.workerConstructor(this.options)), await new Promise((o, i) => {
      this._worker != null && (this._worker.onmessage = (t) => o(t.data), this._worker.onmessageerror = (t) => i(t), this._worker.postMessage(r));
    });
  }
  get worker() {
    return this._worker == null && (this._worker = new this.workerConstructor(this.options)), this._worker;
  }
}
export {
  h as WorkerManager
};
