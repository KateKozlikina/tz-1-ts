export namespace Link {
  const $$typeof: symbol;
  function render(_ref4: any, ref: any): any;
}
export function Location(_ref: any): any;
export class LocationProvider {
  static defaultProps: {
    history: {
      listen: Function;
      location: any;
      navigate: Function;
      transitioning: any;
    };
  };
  constructor(...args: any[]);
  componentDidCatch(error: any, info: any): void;
  componentDidMount(): void;
  componentDidUpdate(prevProps: any, prevState: any): void;
  componentWillUnmount(): void;
  forceUpdate(callback: any): void;
  getContext(): any;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace LocationProvider {
  namespace propTypes {
    function history(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
  }
}
export function Match(_ref7: any): any;
export function Redirect(props: any): any;
export namespace Redirect {
  namespace propTypes {
    function from(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace from {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function to(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
  }
}
export function Router(props: any): any;
export function ServerLocation(_ref2: any): any;
export function createHistory(source: any, options: any): any;
export function createMemorySource(...args: any[]): any;
export namespace globalHistory {
  function listen(listener: any): any;
  const location: any;
  function navigate(to: any, ...args: any[]): any;
  const transitioning: any;
}
export function isRedirect(o: any): any;
export function navigate(to: any, ...args: any[]): any;
export function redirectTo(to: any): void;
