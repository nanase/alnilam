class i {
  constructor(r, o) {
    this.workerConstructor = r, this.options = o;
  }
  workerConstructor;
  options;
  _worker = null;
  async invoke(r) {
    return this._worker == null && (this._worker = new this.workerConstructor(this.options)), await new Promise((o, s) => {
      this._worker != null && (this._worker.onmessage = (t) => o(t.data), this._worker.onmessageerror = (t) => s(t), this._worker.postMessage(r));
    });
  }
  get worker() {
    return this._worker == null && (this._worker = new this.workerConstructor(this.options)), this._worker;
  }
}
export {
  i as WorkerManager
};
