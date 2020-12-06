import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CreateLessonInput } from "./lesson.input";
import { LessonService } from "./lesson.service";
import { LessonType } from "./lesson.type";

@Resolver(() => LessonType)
export class LessonResolver {

    constructor(
        private lessonService: LessonService
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
        return await this.lessonService.createLesson(createLessonInput);
    }
    
}