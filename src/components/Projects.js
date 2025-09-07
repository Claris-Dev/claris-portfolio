export default function Projects() {
    return (
        <section className="my-10 text-center">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <img src="/images/project1.JPG" alt="Project 1" className="w-full rounded-lg"/>
                    <p className="mt-2">Personal Portfolio Website (Coming Soon)</p>
                </div>
                <div>
                    <img src="/images/project2.JPG" alt="Project 2" className="w-full rounded-lg"/>
                    <p className="mt-2">Business Website (Coming Soon)</p>
                </div>
            </div>
        </section>
    )
}
