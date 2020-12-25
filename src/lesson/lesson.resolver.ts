import { Resolver, Query, Mutation, Args, ResolveField, Parent } from "@nestjs/graphql";
import { StudentService } from "src/student/student.service";
import { AssignStudentsToLessonInput } from "./assign-students-to-lesson.input";
import { Lesson } from "./lesson.entity";
import { CreateLessonInput } from "./lesson.input";
import { LessonService } from "./lesson.service";
import { LessonType } from "./lesson.type";

@Resolver(() => LessonType)
export class LessonResolver {

    constructor(
        private lessonService: LessonService,
        private studentService: StudentService
    ) {}

    @Query(() => LessonType)
    async lesson(@Args('id') id: string) {
        return await this.lessonService.getLesson(id);
    }
    
    @Query(() => [LessonType])
    async lessons() {
        return await this.lessonService.getLessons();
    }

    @Mutation(() => LessonType)
    async createLesson(@Args('createLessonInput') createLessonInput: CreateLessonInput) {
        return await 
        this.lessonService
        .createLesson(createLessonInput);
    }

    @Mutation(() => LessonType)
    async assignStudentsToLesson(@Args('assignStudentsToLessonInput') assignStudentsToLessonInput: AssignStudentsToLessonInput) {

        const { lessonId, studentIds } = assignStudentsToLessonInput;

        return await 
        this.lessonService
        .assingStudentLesson(lessonId, studentIds);
    }

    @ResolveField()
    async students(@Parent() lesson: Lesson) {
        return this.studentService.getManyStudents(lesson.students);
    }
}