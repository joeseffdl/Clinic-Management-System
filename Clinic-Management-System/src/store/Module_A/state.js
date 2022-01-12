export default function () {
  return {
    allClients:[
      {
        id: "12321",
        name:'John',
        clientSince:'2022-01-12',
        sex:'Male',
        age:'32',
        occupation:'Engineer',
        mobileNo:'09123456789',
        telNo:'1234567',
        address:'Earth',
        recentSchedule:'2021-25-12',
        procedure:'Crowns',
        diagnosis:'Crowning treatment',
      },
      {
        id: "2313",
        name:'Jane',
        clientSince:'2022-01-12',
        sex:'Female',
        age:'28',
        occupation:'Engineer',
        mobileNo:'09987654321',
        telNo:'4321765',
        address:'Mars',
        recentSchedule:'2021-12-25',
        procedure:'Teeth Cleaning',
        diagnosis:'Teeth treatment',
      }
    ],
    calendar:[
      {
        calendarView: 'day',
        selectedDate: '2019-04-01',
        locale: 'en-us',
        maxDays: 1,
        bordered: false,
        fiveDayWorkWeek: false,
        firstDayMonday: false,
        shortMonthLabel: false,
        showDayOfYearLabel: false,
        shortWeekdayLabel: false,
        shortIntervalLabel: false,
        hour24Format: false,
        hideHeader: false,
        noScroll: false,
        showMonthLabel: true,
        showWorkWeeks: false,
        noDefaultHeaderBtn: false,
        noDefaultHeaderText: false,
        intervalRange: { min: 0, max: 24 },
        intervalRangeStep: 1,
        intervalHeight: 60,
        resourceHeight: 60,
        resourceWidth: 100,
        dayHeight: 100
      }
    ],
    
  } 
}
