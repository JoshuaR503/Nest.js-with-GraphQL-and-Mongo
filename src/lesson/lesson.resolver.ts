import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { LessonService } from "./lesson.service";
import { LessonType } from "./lesson.type";

@Resolver(of => LessonType)
export class LessonResolver {

    constructor(
        private lessonService: LessonService
    ) {}

    @Query(() => LessonType)
    async lesson(
        @Args('id') id: string,
    ) {
        return await this.lessonService.getLesson(id);
    }

    @Mutation(() => LessonType)
    async createLesson(
        @Args('name') name: string,
        @Args('startDate') startDate: string,
        @Args('endDate') endDate: string,
    ) {
        return await this.lessonService.createLesson(name, startDate, endDate);
    }
    
}