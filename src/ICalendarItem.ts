
interface ICalendarItem {

	// Required
	id: string
	startDate: Date
	title: string

	// Optional
	endDate?: Date
	url?: string
	classes?: Array<string> | null
	style?: string

}

interface INormalizedCalendarItem extends ICalendarItem {
	endDate: Date,
	originalItem: ICalendarItem
	classes: Array<string>
	itemRow?: number
}

export { ICalendarItem, INormalizedCalendarItem }