const InitialPoints = 0;
const defaultState = {
    count: 0,
    todolist: [
        "hello"
    ],
    menu_list: [
        {
            id: 1,
            title: "Rankings",
            href: "/rankings"
        },
        {
            id: 2,
            title: "Matches",
            href: "/matches"
        },
        {
            id: 3,
            title: "People",
            href: "/people"
        },

    ],
    selectedBoardIndex: 0,
    boardList: [],
    selectedTabIndex: 0,
    people: [
        {
            id: 1,
            name: "Akshay Suhag",
            standing: 1,
            image: "https://media.licdn.com/dms/image/v2/D4D03AQEMq2z1dkLy0Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684134516841?e=1729728000&v=beta&t=Mh0BLUfP2-gp5X3OAQgNJbpSvvQpL6VWm3tKZOMNdNo",
            points: 0,
            total_matches: 0,
            total_goal: 0,
        },
        {
            id: 2,
            name: "Chanchal Aggarwal",
            standing: 2,
            image: "https://media.licdn.com/dms/image/v2/D5603AQHm9SJ_bA9Nhw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684307774197?e=1729728000&v=beta&t=5u0VcNMFJZ0fE185W4M8JNv3nCDjSRapAPXSydGnggc",
            points: 0,
            total_matches: 0,
            total_goal: 0,
        },
        {
            id: 3,
            name: "Sandip Das",
            standing: 3,
            image: "https://media.licdn.com/dms/image/v2/D5603AQG1uYrci88ucA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721579934409?e=1729728000&v=beta&t=dVnyiVc7Yn-909zwsG76KmP7krz1DhTK4-NlYtAypUA",
            points: 0,
            total_matches: 0,
            total_goal: 0,
        },
        {
            id: 4,
            name: "Nikhil Goyal",
            standing: 4,
            image: "https://media.licdn.com/dms/image/v2/C4E03AQHNbrWNrJhrzA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1561445042247?e=1729728000&v=beta&t=dsou1ekiWbTQBX9dfljTZ7PDK3_CA6JKejbKj2KhxGA",
            points: 0,
            total_matches: 0,
            total_goal: 0,
        },
        {
            id: 5,
            name: "Mayank Sharma",
            standing: 5,
            image: "https://media.licdn.com/dms/image/v2/D4D03AQG0jQTGEYmiTQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684130046094?e=1729728000&v=beta&t=7UUcAPRY9JbDU2hMnmp_-R76_1DA9jkX_-gPgZrAlCQ",
            points: 0,
            total_matches: 0,
            total_goal: 0,
        },
        {
            id: 6,
            name: "Vinay Shakya",
            standing: 6,
            image: "https://media.licdn.com/dms/image/v2/D5603AQFbgsUZymTO9A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684130669233?e=1729728000&v=beta&t=Ljtmbjp8C823xxJPEFXndidu7rbvwkkDhDgdo6NRuXc",
            points: 0,
            total_matches: 0,
            total_goal: 0,
        },
        {
            id: 7,
            name: "Nitesh Bhagat",
            standing: 6,
            image: "https://media.licdn.com/dms/image/v2/D5603AQGpNj-C-1maqA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1689247500959?e=1729728000&v=beta&t=zmernVeqzX6QSHjAp0Hdik2IW_ObFHnflDkMbY8PX3Q",
            points: 0,
            total_matches: 0,
            total_goal: 0,
        },
        {
            id: 8,
            name: "Prakash Kumar",
            standing: 6,
            image: "https://media.licdn.com/dms/image/v2/D5603AQE_URjL6lUmIA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684131957707?e=1729728000&v=beta&t=xuwnp74MxKIC8DNAo5zEjrj9WuacGCvN0vgvwlPq4QY",
            points: 0,
            total_matches: 0,
            total_goal: 0,
        },
        {
            id: 9,
            name: "Litesh Sinha",
            standing: 6,
            image: "https://media.licdn.com/dms/image/v2/D4D03AQFlqfzZtzYumQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684129843524?e=1729728000&v=beta&t=lRvMlDimYZFE-fKSGWFHw_Z977vkf1uUFhfJbMGvq8Q",
            points: 0,
            total_matches: 0,
            total_goal: 0,
        }
    ],
    matches: [


    ],
}


export default defaultState

export { InitialPoints }