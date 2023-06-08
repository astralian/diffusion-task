export default interface IResponse<T> {
  status: 200 | 500
  data: T
}
