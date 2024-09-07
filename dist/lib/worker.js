var n = Object.defineProperty;
var w = (t, r, o) => r in t ? n(t, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[r] = o;
var e = (t, r, o) => w(t, typeof r != "symbol" ? r + "" : r, o);
class h {
  constructor(r, o) {
    e(this, "_worker", null);
    this.workerConstructor = r, this.options = o;
  }
  async invoke(r) {
    return this._worker == null && (this._worker = new this.workerConstructor(this.options)), await new Promise((o, i) => {
      this._worker.onmessage = function(s) {
        o(s.data);
      }, this._worker.onmessageerror = function(s) {
        i(s);
      }, this._worker.postMessage(r);
    });
  }
  get worker() {
    return this._worker == null && (this._worker = new this.workerConstructor(this.options)), this._worker;
  }
}
export {
  h as WorkerManager
};
