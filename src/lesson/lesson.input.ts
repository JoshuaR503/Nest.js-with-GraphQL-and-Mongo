import { Field, ID, InputType } from "@nestjs/graphql";
import { IsDate, IsUUID, MinLength } from "class-validator";

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

    @IsUUID("4", {each: true})
    @Field(() => [ID], {defaultValue: []})
    students: string[];
}