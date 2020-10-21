namespace ts {
    describe("unittests:: tsbuild:: persistResolutions::", () => {
        function getFs(outFile?: string) {
            return loadProjectFromFiles({
                "/src/project/src/main.ts": Utils.dedent`
                    import { something } from "./filePresent";
                    import { something as something1 } from "./filePresent";
                    import { something2 } from "./fileNotFound";`,
                "/src/project/src/anotherFileReusingResolution.ts": Utils.dedent`
                    import { something } from "./filePresent";
                    import { something2 } from "./fileNotFound";`,
                "/src/project/src/filePresent.ts": `export function something() { return 10; }`,
                "/src/project/tsconfig.json": JSON.stringify({
                    compilerOptions: {
                        module: "amd",
                        composite: true,
                        persistResolutions: true,
                        traceResolution: true,
                        outFile
                    },
                    include: ["src/**/*.ts"]
                }),
            });
        }
        verifyTscSerializedIncrementalEdits({
            scenario: "persistResolutions",
            subScenario: `saves resolution and uses it for new program`,
            fs: getFs,
            commandLineArgs: ["--b", "src/project"],
            incrementalScenarios: [
                noChangeRun,
                {
                    subScenario: "Modify main file",
                    buildKind: BuildKind.IncrementalDtsChange,
                    modifyFs: fs => appendText(fs, `/src/project/src/main.ts`, `something();`),
                },
                {
                    subScenario: "Add new module and update main file",
                    buildKind: BuildKind.IncrementalDtsChange,
                    modifyFs: fs => {
                        fs.writeFileSync(`/src/project/src/newFile.ts`, "export function foo() { return 20; }");
                        prependText(fs, `/src/project/src/main.ts`, `import { foo } from "./newFile";`);
                    },
                },
                {
                    subScenario: "Write file that could not be resolved",
                    buildKind: BuildKind.IncrementalDtsChange,
                    modifyFs: fs => fs.writeFileSync(`/src/project/src/fileNotFound.ts`, "export function something2() { return 20; }"),
                    // when doing clean build, fileNotFound.ts would be resolved so the output order in outFile.js would change
                    // In build mode the out is generated only when there are no errors
                    // Outputs are generated, buildinfo is updated to report no errors
                    cleanBuildDiscrepancies: () => new Map([
                        [`/src/project/src/filePresent.js`, CleanBuildDescrepancy.CleanFilePresent],
                        [`/src/project/src/filePresent.d.ts`, CleanBuildDescrepancy.CleanFilePresent],
                        [`/src/project/src/fileNotFound.js`, CleanBuildDescrepancy.CleanFilePresent],
                        [`/src/project/src/fileNotFound.d.ts`, CleanBuildDescrepancy.CleanFilePresent],
                        [`/src/project/src/anotherFileReusingResolution.js`, CleanBuildDescrepancy.CleanFilePresent],
                        [`/src/project/src/anotherFileReusingResolution.d.ts`, CleanBuildDescrepancy.CleanFilePresent],
                        [`/src/project/src/main.js`, CleanBuildDescrepancy.CleanFilePresent],
                        [`/src/project/src/main.d.ts`, CleanBuildDescrepancy.CleanFilePresent],
                        [`/src/project/src/newFile.js`, CleanBuildDescrepancy.CleanFilePresent],
                        [`/src/project/src/newFile.d.ts`, CleanBuildDescrepancy.CleanFilePresent],
                        [`/src/project/tsconfig.tsbuildinfo`, CleanBuildDescrepancy.CleanFileTextDifferent],
                    ]),
                },
                {
                    subScenario: "Clean resolutions",
                    buildKind: BuildKind.IncrementalDtsChange,
                    modifyFs: noop,
                    commandLineArgs: ["--b", "src/project", "--cleanPersistedProgram"]
                },
                {
                    subScenario: "Clean resolutions again",
                    buildKind: BuildKind.IncrementalDtsChange,
                    modifyFs: noop,
                    commandLineArgs: ["--b", "src/project", "--cleanPersistedProgram"]
                },
                noChangeRun,
                {
                    subScenario: "Modify main file",
                    buildKind: BuildKind.IncrementalDtsChange,
                    modifyFs: fs => appendText(fs, `/src/project/src/main.ts`, `something();`),
                },
            ],
            baselinePrograms: true,
        });

        verifyTscSerializedIncrementalEdits({
            scenario: "persistResolutions",
            subScenario: `saves resolution and uses it for new program with outFile`,
            fs: () => getFs("outFile.js"),
            commandLineArgs: ["--b", "src/project"],
            incrementalScenarios: [
                noChangeRun,
                {
                    subScenario: "Modify main file",
                    buildKind: BuildKind.IncrementalDtsChange,
                    modifyFs: fs => appendText(fs, `/src/project/src/main.ts`, `something();`),
                },
                {
                    subScenario: "Add new module and update main file",
                    buildKind: BuildKind.IncrementalDtsChange,
                    modifyFs: fs => {
                        fs.writeFileSync(`/src/project/src/newFile.ts`, "export function foo() { return 20; }");
                        prependText(fs, `/src/project/src/main.ts`, `import { foo } from "./newFile";`);
                    },
                },
                {
                    subScenario: "Write file that could not be resolved",
                    buildKind: BuildKind.IncrementalDtsChange,
                    modifyFs: fs => fs.writeFileSync(`/src/project/src/fileNotFound.ts`, "export function something2() { return 20; }"),
                    // when doing clean build, fileNotFound.ts would be resolved so the output order in outFile.js would change
                    // In build mode the out is generated only when there are no errors
                    cleanBuildDiscrepancies: () => new Map([
                        ["/src/project/outFile.tsbuildinfo", CleanBuildDescrepancy.CleanFileTextDifferent],
                        ["/src/project/outFile.js", CleanBuildDescrepancy.CleanFilePresent],
                        ["/src/project/outFile.d.ts", CleanBuildDescrepancy.CleanFilePresent],
                        ["/src/project/outFile.tsbuildinfo.baseline.txt", CleanBuildDescrepancy.CleanFilePresent],
                    ]),
                },
                {
                    subScenario: "Clean resolutions",
                    buildKind: BuildKind.IncrementalDtsChange,
                    modifyFs: noop,
                    commandLineArgs: ["--b", "src/project", "--cleanPersistedProgram"]
                },
                {
                    subScenario: "Clean resolutions again",
                    buildKind: BuildKind.IncrementalDtsChange,
                    modifyFs: noop,
                    commandLineArgs: ["--b", "src/project", "--cleanPersistedProgram"]
                },
                noChangeRun,
                {
                    subScenario: "Modify main file",
                    buildKind: BuildKind.IncrementalDtsChange,
                    modifyFs: fs => appendText(fs, `/src/project/src/main.ts`, `something();`),
                },
            ],
            baselinePrograms: true,
        });
    });
}