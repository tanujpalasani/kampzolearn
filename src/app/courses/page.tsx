import type { Metadata } from 'next';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { courses } from "@/data/courses";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'All Courses',
  description: 'Explore our wide range of affordable online courses for students. Learn coding, marketing, and more.',
};

export default function CoursesPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-dark mb-4">Our Courses</h1>
          <p className="text-lg text-gray-600 max-w-[700px] mx-auto">
            Browse through our highly curated, project-based curriculums designed to get you hired.
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.id} className="group flex flex-col h-full bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-none">
              <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                 <Image src={course.image} alt={`Cover image for ${course.title}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" priority={course.id === "1"} />
              </div>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-gray-600 mb-4">{course.shortDescription}</p>
                <div className="flex items-center justify-between text-sm font-medium">
                  <span className="text-primary text-lg font-bold">{course.price}</span>
                  <div className="flex flex-col text-right">
                    <span className="text-gray-500">{course.level}</span>
                    <span className="text-gray-400 text-xs">{course.duration}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button href={`/courses/${course.slug}`} className="w-full">
                  View Course Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
