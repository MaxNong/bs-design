import { ElementOf, tuple } from './type';

export const IncreaseStatusColorTypes = ['activated', 'inactive', 'cancelled', 'failure'];
export const PresetStatusColorTypes = tuple('success', 'processing', 'error', 'default', 'warning', ...IncreaseStatusColorTypes);

// eslint-disable-next-line import/prefer-default-export
export const PresetColorTypes = tuple(
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
);
export const PresetLinearColorTypes = tuple(
  'linear-green',
  'linear-orange',
  'linear-gray',
);

export type PresetColorType = ElementOf<typeof PresetColorTypes>;
export type PresetStatusColorType = ElementOf<typeof PresetStatusColorTypes>;
export type PresetLinearColorType = ElementOf<typeof PresetLinearColorTypes>;
