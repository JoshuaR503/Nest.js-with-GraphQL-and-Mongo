import { Field, InputType } from "@nestjs/graphql";
import { IsDate, MinLength } from "class-validator";

@InputType()
export class CreateLessonInput {

    @MinLength(1)
    @Field()
    name: string;

    @IsDate()
    @Field()
    startDate: string;

    @IsDate()
    @Field()
    endDate: string;
}