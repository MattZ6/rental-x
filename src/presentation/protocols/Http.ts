export interface IHttpResponse<B = unknown> {
  statusCode: number;
  body?: B;
}

export type HttpRequestFile = {
  buffer: Buffer;
  size: number;
  mimetype: string;
  name: string;
};

export interface IHttpRequest<
  B = unknown,
  P = unknown,
  Q = unknown,
  H = unknown
> {
  user_id?: string;
  body: B;
  params: P;
  query: Q;
  headers: H;
  original_url: string;
  method: string;
  file?: HttpRequestFile;
  files?: HttpRequestFile[];
}
