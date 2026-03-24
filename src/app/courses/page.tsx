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
    <div className="min-h-screen bg-gray-50 section-pad">
      <div className="section-shell">
        <div className="text-center mb-16">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-dark sm:text-4xl">Our Courses</h1>
          <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg">
            Browse through our highly curated, project-based curriculums designed to get you hired.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.id} className="group flex h-full flex-col bg-white">
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
