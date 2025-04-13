const HELP = [
    {
        title: "topic",
        description: [
            "Ingin Menjadi Programmer Handal Namun Enggan Ngoding",
        ]
    },
    {
        title: "description",
        description: [
            "Imphnen adalah komunitas programmer yang enggan ngoding maunya scroll fesnuk",
        ]
    },
    {
        title: "list commands",
        description: [
            "help - Show help or this message",
            "cls - Clear the screen",
            "dir - List directory",
            "./imphnen.exe - Run Imphnen User Interface",
        ]
    }
]

export default function (args: string[]) {
    return (
        <>
            {HELP.map((item, index) => (
                <div class="my-3" key={index}>
                    <div class="uppercase">
                        {item.title}
                    </div>
                    <div class="ms-4">
                        {item.description.map((desc) => (
                            <p>{desc}</p>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}