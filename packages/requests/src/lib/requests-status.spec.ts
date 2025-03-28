import { createState, Store } from '@ngneat/elf';
import { expectTypeOf } from 'expect-type';
import { StatusState, updateRequestStatus } from '..';
import {
  getRequestStatus,
  selectIsRequestPending,
  selectRequestStatus,
  updateRequestsStatus,
  withRequestsStatus,
} from './requests-status';

describe('requestsStatus', () => {
  const { state, config } = createState(withRequestsStatus());
  const store = new Store({ state, config, name: '' });
  const requestKey = 'foo';

  it('should work', () => {
    const spy = jest.fn();

    store.pipe(selectRequestStatus(requestKey)).subscribe((v) => {
      expectTypeOf(v).toEqualTypeOf<StatusState>();
      spy(v);
    });

    expect(spy).toHaveBeenCalledWith({ value: 'pending' });

    expect(store.query(getRequestStatus(requestKey))).toStrictEqual({
      value: 'pending',
    });

    store.update(
      updateRequestsStatus({
        [requestKey]: {
          value: 'success',
        },
      })
    );
    expect(store.query(getRequestStatus(requestKey))).toStrictEqual({
      value: 'success',
    });
    expect(spy).toHaveBeenCalledWith({ value: 'success' });

    store.update(
      updateRequestsStatus({
        bar: {
          value: 'success',
        },
      })
    );

    // Updating a different key should not cause emission
    expect(spy).toHaveBeenCalledTimes(2);

    store.pipe(selectIsRequestPending(requestKey)).subscribe((v) => {
      expectTypeOf(v).toEqualTypeOf<boolean>();
      expect(v).toBeFalsy();
    });
  });

  it('should set the error', () => {
    store.update(
      updateRequestsStatus({
        baz: {
          value: 'error',
          error: { message: '' },
        },
      })
    );

    expect(store.query(getRequestStatus('baz'))).toStrictEqual({
      value: 'error',
      error: { message: '' },
    });
  });

  it('should updateRequestStatus', () => {
    const { state, config } = createState(withRequestsStatus());
    const store = new Store({ state, config, name: '' });
    const requestKey = 'foo';

    const spy = jest.fn();

    store.update(updateRequestStatus(requestKey, 'success'));

    store.pipe(selectRequestStatus(requestKey)).subscribe((v) => {
      spy(v);
    });

    expect(spy).toHaveBeenCalledWith({ value: 'success' });

    store.update(updateRequestStatus(requestKey, 'error', { type: 'boo' }));

    expect(spy).toHaveBeenCalledWith({
      value: 'error',
      error: { type: 'boo' },
    });

    store.update(updateRequestStatus(requestKey, 'pending'));

    expect(spy).toHaveBeenCalledWith({ value: 'pending' });

    store.update(updateRequestStatus(requestKey, 'idle'));

    expect(spy).toHaveBeenCalledWith({ value: 'idle' });
  });

  it('should infer', () => {
    const { state, config } = createState(withRequestsStatus());
    const store = new Store({ state, config, name: '' });

    store.update(updateRequestStatus(requestKey, 'success'));

    // @ts-expect-error - Not valid status
    store.update(updateRequestStatus(requestKey, 'foo'));
    // @ts-expect-error - Should pass the error as third param
    store.update(updateRequestStatus(requestKey, 'error'));
  });
});
