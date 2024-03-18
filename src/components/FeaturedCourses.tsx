"use client"
import courseData from "@/data/music-courses.json"
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string,
}


const FeaturedCourses = () => {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);
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
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center">
                            <BackgroundGradient className="rounded-[22px] max-w-sm h-full bg-white dark:bg-zinc-900">
                                <div className="min-w-full h-full mx-auto shadow-md rounded-[22px] overflow-hidden">
                                    <Image className="w-full h-56 object-cover object-center" width={200} height={200} src={course.image} alt={course.title} />
                                    <div className="p-4">
                                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{course.title}</h2>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">Price: ${course.price}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">Instructor: {course.instructor}</p>
                                        <p className="text-gray-700 mt-2 dark:text-gray-400">{course.description}</p>
                                    </div>
                                </div>
                            </BackgroundGradient>
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