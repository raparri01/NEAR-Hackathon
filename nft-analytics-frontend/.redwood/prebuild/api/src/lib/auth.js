/**
 * Once you are ready to add authentication to your application
 * you'll build out requireAuth() with real functionality. For
 * now we just return `true` so that the calls in services
 * have something to check against, simulating a logged
 * in user that is allowed to access that service.
 *
 * See https://redwoodjs.com/docs/authentication for more info.
 */
export const isAuthenticated = () => {
  return true;
};
export const hasRole = ({
  roles
}) => {
  return roles !== undefined;
};

// This is used by the redwood directive
// in ./api/src/directives/requireAuth

// Roles are passed in by the requireAuth directive if you have auth setup
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const requireAuth = ({
  roles
}) => {
  return isAuthenticated();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpc0F1dGhlbnRpY2F0ZWQiLCJoYXNSb2xlIiwicm9sZXMiLCJ1bmRlZmluZWQiLCJyZXF1aXJlQXV0aCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvbGliL2F1dGguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBPbmNlIHlvdSBhcmUgcmVhZHkgdG8gYWRkIGF1dGhlbnRpY2F0aW9uIHRvIHlvdXIgYXBwbGljYXRpb25cbiAqIHlvdSdsbCBidWlsZCBvdXQgcmVxdWlyZUF1dGgoKSB3aXRoIHJlYWwgZnVuY3Rpb25hbGl0eS4gRm9yXG4gKiBub3cgd2UganVzdCByZXR1cm4gYHRydWVgIHNvIHRoYXQgdGhlIGNhbGxzIGluIHNlcnZpY2VzXG4gKiBoYXZlIHNvbWV0aGluZyB0byBjaGVjayBhZ2FpbnN0LCBzaW11bGF0aW5nIGEgbG9nZ2VkXG4gKiBpbiB1c2VyIHRoYXQgaXMgYWxsb3dlZCB0byBhY2Nlc3MgdGhhdCBzZXJ2aWNlLlxuICpcbiAqIFNlZSBodHRwczovL3JlZHdvb2Rqcy5jb20vZG9jcy9hdXRoZW50aWNhdGlvbiBmb3IgbW9yZSBpbmZvLlxuICovXG5leHBvcnQgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gKCkgPT4ge1xuICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnQgY29uc3QgaGFzUm9sZSA9ICh7IHJvbGVzIH0pID0+IHtcbiAgcmV0dXJuIHJvbGVzICE9PSB1bmRlZmluZWRcbn1cblxuLy8gVGhpcyBpcyB1c2VkIGJ5IHRoZSByZWR3b29kIGRpcmVjdGl2ZVxuLy8gaW4gLi9hcGkvc3JjL2RpcmVjdGl2ZXMvcmVxdWlyZUF1dGhcblxuLy8gUm9sZXMgYXJlIHBhc3NlZCBpbiBieSB0aGUgcmVxdWlyZUF1dGggZGlyZWN0aXZlIGlmIHlvdSBoYXZlIGF1dGggc2V0dXBcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycywgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5leHBvcnQgY29uc3QgcmVxdWlyZUF1dGggPSAoeyByb2xlcyB9KSA9PiB7XG4gIHJldHVybiBpc0F1dGhlbnRpY2F0ZWQoKVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLE1BQU1BLGVBQWUsR0FBRyxNQUFNO0VBQ25DLE9BQU8sSUFBSTtBQUNiLENBQUM7QUFFRCxPQUFPLE1BQU1DLE9BQU8sR0FBRyxDQUFDO0VBQUVDO0FBQU0sQ0FBQyxLQUFLO0VBQ3BDLE9BQU9BLEtBQUssS0FBS0MsU0FBUztBQUM1QixDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8sTUFBTUMsV0FBVyxHQUFHLENBQUM7RUFBRUY7QUFBTSxDQUFDLEtBQUs7RUFDeEMsT0FBT0YsZUFBZSxFQUFFO0FBQzFCLENBQUMifQ==