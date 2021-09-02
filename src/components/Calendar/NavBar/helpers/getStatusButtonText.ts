/* eslint-disable no-case-declarations */
import { MONTH_MAP } from '../../constant';
import type { CalendarContextValueType } from '../../context';
import { CalendarMode } from '../../enum';

type ContextDataType = Pick<
  CalendarContextValueType,
  'draftDate' | 'calendarMode'
>;
type GetStatusButtonTextType = (contextData: ContextDataType) => string;

/**
 * Get the text on <StatusButton /> by `calendarMode`.
 *
 * @param contextData.draftDate - Draft Date object.
 * @param contextData.calendarMode - Current body display.
 * @returns The text that should display on <StatusButton />.
 */
export const getStatusButtonText: GetStatusButtonTextType = (contextData) => {
  const { draftDate, calendarMode } = contextData;

  switch (calendarMode) {
    case CalendarMode.YEAR:
      const year = draftDate.getFullYear().toString();
      const yearDecade = year.slice(0, year.length - 1);
      return `${yearDecade}0-${yearDecade}9`;
    case CalendarMode.MONTH:
      return draftDate.getFullYear().toString();
    // CalendarMode.DATE
    default:
      return `${MONTH_MAP[draftDate.getMonth()]} ${draftDate.getFullYear()}`;
  }
};
