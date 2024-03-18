import courseData from "@/data/music-courses.json"
import Link from "next/link";

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    // image: "/courses/guitar.jpg"
}


const FeaturedCourses = () => {
    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured);
    console.log(featuredCourses);

    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
                </div>
            </div>
            <div className="mt-10 mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredCourses.map((course:Course) => (
                        <div key={course.id} className="flex justify-center">
                            <p>test</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link href={"/courses"}
                    className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                >
                    View All courses
                </Link>
            </div>
        </div>
    );
};

export default FeaturedCourses;