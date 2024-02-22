import { setupWorker } from 'msw/browser';
import loginHandlers from './handlers/login';
import attendeesHandlers from './handlers/attendees';

export const worker = setupWorker(...loginHandlers, ...attendeesHandlers);
