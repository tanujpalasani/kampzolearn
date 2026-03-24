import type { Metadata } from 'next';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { courses } from "@/data/courses";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Learn Coding Online with Affordable Online Courses | Kampzo Learn',
  description:
    'Learn coding online with beginner-friendly programs, practical projects, and affordable online courses designed for students across India.',
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 section-pad">
      <div className="section-shell">
        <div className="text-center mb-16">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-dark sm:text-4xl">Learn Coding Online with Beginner-Friendly Courses</h1>
          <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg">
            Explore a beginner coding course collection with hands-on assignments, mentor guidance, and affordable online courses built for real outcomes.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500 sm:text-base">
            Whether you are starting from scratch or upskilling for placements, these tracks are designed to help you learn coding online at your own pace with clear milestones.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.id} className="group flex h-full flex-col bg-white">
              <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                  <Image src={course.image} alt={`Beginner coding course and affordable online courses thumbnail for ${course.title}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" priority={course.id === "1"} />
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
