	$(document).ready(function() {
		
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			/*Change defaultDate on the first of every month ex:
			April 1st 2014 make '2014-04-01*/
			defaultDate: '2015-05-01',
			editable: false,
			eventLimit: true, // allow "more" link when too many events
			/*To create events, use template below:
			title: 'title here',
			start: 'Year(1992)-Month(08)-Date(19)T(Needed to call time)Hour(08):Minute(30):Second(00)',
			end:   '(Same as start)'
			*/
			events: [
				{
					title: 'Due Date',
					start: '2015-05-11T08:30:00',
					end:   '2015-05-11T16:30:00'
				},
				{
					title: 'Practice Days',
					start: '2015-05-27T08:30:00',
					end:   '2015-05-29T16:30:00'
				},
				{
					title: 'Battle Time with Team Brianfield',
					start: '2015-05-30T08:30:00',
					end:   '2015-05-30T16:30:00'
				}
			]
		});
		
	});
