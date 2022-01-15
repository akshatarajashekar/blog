package main

import (
	"fmt"
	"strings"
)


func main() {
	conferenceName := "Go Conference"
	const conferenceTickets int= 50
	var remainingTickets uint = 50

	fmt.Printf("conferenceTickets is %T, remainingTicket is %T\n",conferenceTickets, remainingTickets )
	fmt.Printf("Welcome to %v booking application\n", conferenceName)
	fmt.Printf("We have total of %v Tickets\n", conferenceTickets)

	fmt.Println("Remaining Tickets", remainingTickets)

	bookings := []string{}
	

	for {
		var firstName string
		var lastName string
		var emailId string
		var userTickets uint
		// ask user for name
		fmt.Println("Enter your first name: ")
		fmt.Scan(&firstName)
		fmt.Println("Enter your last name: ")
		fmt.Scan(&lastName)

		bookings = append(bookings, firstName + " " + lastName)
		
		fmt.Println("Enter your emailId: ")
		fmt.Scan(&emailId)

		fmt.Println("Enter number of ticketse: ")
		fmt.Scan(&userTickets)


		if userTickets > remainingTickets {
			// end pro
			fmt.Printf("we only have %v tickets", remainingTickets)
			break
		}
	
		remainingTickets =	remainingTickets - userTickets
		fmt.Printf("First Name %v\n Last name %v \n  Email id %v \n tickets booked %v\n", firstName, lastName, emailId, userTickets)
		fmt.Printf("%v remainingTickets\n", remainingTickets)

		firstNames := []string{}

		for _, booking := range bookings {
			var names = strings.Fields(booking)
			firstNames = append(firstNames, names[0	])
		}
		fmt.Printf("First names of bookings are %v \n", firstNames)
		if remainingTickets == 0 {
			// end pro
			fmt.Println("Our confernece is booked out")
			break
		}
	}
}
