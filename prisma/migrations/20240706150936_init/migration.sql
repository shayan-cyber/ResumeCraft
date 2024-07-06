-- CreateTable
CREATE TABLE "ResumeData" (
    "id" SERIAL NOT NULL,
    "resume_id" INTEGER NOT NULL,
    "skils_details" TEXT[],
    "other_details" TEXT[],

    CONSTRAINT "ResumeData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BasicDetails" (
    "id" SERIAL NOT NULL,
    "resume_data_id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "linkedin_link" VARCHAR(255),
    "github_link" VARCHAR(255),
    "other" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,

    CONSTRAINT "BasicDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkDetails" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "company_name" VARCHAR(255) NOT NULL,
    "location" VARCHAR(255),
    "start_date" TIMESTAMP(3),
    "end_date" TIMESTAMP(3),
    "description" TEXT NOT NULL,
    "resume_data_id" INTEGER NOT NULL,

    CONSTRAINT "WorkDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EducationDetails" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "level" VARCHAR(255) NOT NULL,
    "area_of_study" VARCHAR(255),
    "start_date" TIMESTAMP(3),
    "end_date" TIMESTAMP(3),
    "result" VARCHAR(255) NOT NULL,
    "resume_data_id" INTEGER NOT NULL,

    CONSTRAINT "EducationDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectDetails" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "tech_stack" VARCHAR(255) NOT NULL,
    "link" VARCHAR(255) NOT NULL,
    "start_date" TIMESTAMP(3),
    "end_date" TIMESTAMP(3),
    "description" TEXT NOT NULL,
    "resume_data_id" INTEGER NOT NULL,

    CONSTRAINT "ProjectDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BasicDetails_resume_data_id_key" ON "BasicDetails"("resume_data_id");

-- AddForeignKey
ALTER TABLE "BasicDetails" ADD CONSTRAINT "BasicDetails_resume_data_id_fkey" FOREIGN KEY ("resume_data_id") REFERENCES "ResumeData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkDetails" ADD CONSTRAINT "WorkDetails_resume_data_id_fkey" FOREIGN KEY ("resume_data_id") REFERENCES "ResumeData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EducationDetails" ADD CONSTRAINT "EducationDetails_resume_data_id_fkey" FOREIGN KEY ("resume_data_id") REFERENCES "ResumeData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectDetails" ADD CONSTRAINT "ProjectDetails_resume_data_id_fkey" FOREIGN KEY ("resume_data_id") REFERENCES "ResumeData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
