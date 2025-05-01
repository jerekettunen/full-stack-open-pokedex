Exercise 11.1
Considering C++

In this case when we are talking about linting a few tools pop us. 
Examples of these are clang-tidy, which is a static analyzer based on clang and Cpplint which is Google's version using their style guiide.
In testing gtest could be used, which is googles testing framework. Other options would be Microsoft Unit Testing Framework and CTest.
For building CMake or on unix systems make seem to be vey popular but there are other options like Ninja (using a Cmake backend) and Bazel.

For setting up the CI there are many options as well. For self hosted JetBrains TeamCity is an option as well as bamboo although these are cost prohbitive for individuals
Some cloud based options could be CircleCI or even similar to GitHub Azure DevOps and BitBucket pipelines could be used.
All of these suport c++ toolchains like Cmake/Make and can use something like catch2 for testing and clang-tidy for static analysis as well. To various degrees of course, details have been omitted.

If running a small project alone or with a small team free options like GitHub's tools with quite a lot of free minutes would suffice. Self-hosted tends to have a higher upfront cost after all. Project size is also a consideration as larger projects would take longer to process which would equal more costs in the cloud evionment. Cloud systems are also easier to setup more often than not so considering abilities to set up infrastructure and the speed that you need to get for deployment this is a factor as well.
Considering all these cloud-based would be the solution that I'd personally choose even with the complexity of needing building for the c++ application
