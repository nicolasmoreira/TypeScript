Input::
//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/project/src/anotherFileReusingResolution.ts]
import { something } from "./filePresent";
import { something2 } from "./fileNotFound";

//// [/src/project/src/filePresent.ts]
export function something() { return 10; }

//// [/src/project/src/globalAnotherFileWithSameReferenes.ts]
/// <reference path="./globalFilePresent.ts"/>
/// <reference path="./globalFileNotFound.ts"/>
function globalAnotherFileWithSameReferenes() { }


//// [/src/project/src/globalFilePresent.ts]
function globalSomething() { return 10; }

//// [/src/project/src/globalMain.ts]
/// <reference path="./globalFilePresent.ts"/>
/// <reference path="./globalFileNotFound.ts"/>
function globalMain() { }


//// [/src/project/src/main.ts]
import { something } from "./filePresent";
import { something as something1 } from "./filePresent";
import { something2 } from "./fileNotFound";

//// [/src/project/tsconfig.json]
{"compilerOptions":{"module":"amd","composite":true,"persistResolutions":true,"traceResolution":true},"include":["src/**/*.ts"]}



Output::
/lib/tsc --b src/project
======== Resolving module './filePresent' from '/src/project/src/anotherFileReusingResolution.ts'. ========
Module resolution kind is not specified, using 'Classic'.
File '/src/project/src/filePresent.ts' exist - use it as a name resolution result.
======== Module name './filePresent' was successfully resolved to '/src/project/src/filePresent.ts'. ========
======== Resolving module './fileNotFound' from '/src/project/src/anotherFileReusingResolution.ts'. ========
Module resolution kind is not specified, using 'Classic'.
File '/src/project/src/fileNotFound.ts' does not exist.
File '/src/project/src/fileNotFound.tsx' does not exist.
File '/src/project/src/fileNotFound.d.ts' does not exist.
File '/src/project/src/fileNotFound.js' does not exist.
File '/src/project/src/fileNotFound.jsx' does not exist.
======== Module name './fileNotFound' was not resolved. ========
======== Resolving module './filePresent' from '/src/project/src/main.ts'. ========
Resolution for module './filePresent' was found in cache from location '/src/project/src'.
======== Module name './filePresent' was successfully resolved to '/src/project/src/filePresent.ts'. ========
======== Resolving module './fileNotFound' from '/src/project/src/main.ts'. ========
Resolution for module './fileNotFound' was found in cache from location '/src/project/src'.
======== Module name './fileNotFound' was not resolved. ========
[96msrc/project/src/anotherFileReusingResolution.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m2[0m import { something2 } from "./fileNotFound";
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m

[96msrc/project/src/globalAnotherFileWithSameReferenes.ts[0m:[93m2[0m:[93m22[0m - [91merror[0m[90m TS6053: [0mFile '/src/project/src/globalFileNotFound.ts' not found.

[7m2[0m /// <reference path="./globalFileNotFound.ts"/>
[7m [0m [91m                     ~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/project/src/globalMain.ts[0m:[93m2[0m:[93m22[0m - [91merror[0m[90m TS6053: [0mFile '/src/project/src/globalFileNotFound.ts' not found.

[7m2[0m /// <reference path="./globalFileNotFound.ts"/>
[7m [0m [91m                     ~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/project/src/main.ts[0m:[93m3[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m3[0m import { something2 } from "./fileNotFound";
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m


Found 4 errors.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: ["/src/project/src/anotherFileReusingResolution.ts","/src/project/src/filePresent.ts","/src/project/src/globalAnotherFileWithSameReferenes.ts","/src/project/src/globalFilePresent.ts","/src/project/src/globalMain.ts","/src/project/src/main.ts"]
Program options: {"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project/src/filePresent.ts
/src/project/src/anotherFileReusingResolution.ts
/src/project/src/globalFilePresent.ts
/src/project/src/globalAnotherFileWithSameReferenes.ts
/src/project/src/globalMain.ts
/src/project/src/main.ts

Semantic diagnostics in builder refreshed for::
/lib/lib.d.ts
/src/project/src/filePresent.ts
/src/project/src/anotherFileReusingResolution.ts
/src/project/src/globalFilePresent.ts
/src/project/src/globalAnotherFileWithSameReferenes.ts
/src/project/src/globalMain.ts
/src/project/src/main.ts


//// [/src/project/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./src/filepresent.ts": {
        "version": "11598859296-export function something() { return 10; }",
        "signature": "-15062742831-export declare function something(): number;\r\n",
        "affectsGlobalScope": false
      },
      "./src/anotherfilereusingresolution.ts": {
        "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      },
      "./src/globalfilepresent.ts": {
        "version": "-5627034801-function globalSomething() { return 10; }",
        "signature": "-6032143744-declare function globalSomething(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalanotherfilewithsamereferenes.ts": {
        "version": "-4448253777-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalAnotherFileWithSameReferenes() { }\n",
        "signature": "-18812905712-/// <reference path=\"globalFilePresent.d.ts\" />\r\ndeclare function globalAnotherFileWithSameReferenes(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalmain.ts": {
        "version": "-12326309214-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalMain() { }\n",
        "signature": "-19927227517-/// <reference path=\"globalFilePresent.d.ts\" />\r\ndeclare function globalMain(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/main.ts": {
        "version": "-9387417376-import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      }
    },
    "options": {
      "module": 2,
      "composite": true,
      "persistResolutions": true,
      "traceResolution": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {
      "./src/anotherfilereusingresolution.ts": [
        "./src/filepresent.ts"
      ],
      "./src/globalanotherfilewithsamereferenes.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts"
      ],
      "./src/globalmain.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts"
      ],
      "./src/main.ts": [
        "./src/filepresent.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      [
        "./src/anotherfilereusingresolution.ts",
        [
          {
            "file": "./src/anotherfilereusingresolution.ts",
            "start": 70,
            "length": 16,
            "messageText": "Cannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?",
            "category": 1,
            "code": 2792
          }
        ]
      ],
      "./src/filepresent.ts",
      "./src/globalanotherfilewithsamereferenes.ts",
      "./src/globalfilepresent.ts",
      "./src/globalmain.ts",
      [
        "./src/main.ts",
        [
          {
            "file": "./src/main.ts",
            "start": 127,
            "length": 16,
            "messageText": "Cannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?",
            "category": 1,
            "code": 2792
          }
        ]
      ]
    ],
    "affectedFilesPendingEmit": [
      [
        "./src/anotherfilereusingresolution.ts",
        1
      ],
      [
        "./src/filepresent.ts",
        1
      ],
      [
        "./src/globalanotherfilewithsamereferenes.ts",
        1
      ],
      [
        "./src/globalfilepresent.ts",
        1
      ],
      [
        "./src/globalmain.ts",
        1
      ],
      [
        "./src/main.ts",
        1
      ]
    ],
    "peristedProgram": {
      "files": [
        {
          "fileName": "../../lib/lib.d.ts",
          "originalFileName": "../../lib/lib.d.ts",
          "path": "../../lib/lib.d.ts",
          "resolvedPath": "../../lib/lib.d.ts",
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "flags": 0,
          "hasNoDefaultLib": true,
          "includeReasons": [
            {
              "kind": 6
            }
          ]
        },
        {
          "fileName": "./src/filePresent.ts",
          "originalFileName": "./src/filePresent.ts",
          "path": "./src/filepresent.ts",
          "resolvedPath": "./src/filepresent.ts",
          "version": "11598859296-export function something() { return 10; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 3,
              "file": "./src/anotherfilereusingresolution.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 1
            },
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 0
            },
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 1
            }
          ]
        },
        {
          "fileName": "./src/anotherFileReusingResolution.ts",
          "originalFileName": "./src/anotherFileReusingResolution.ts",
          "path": "./src/anotherfilereusingresolution.ts",
          "resolvedPath": "./src/anotherfilereusingresolution.ts",
          "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
          "flags": 0,
          "imports": [
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./fileNotFound"
            }
          ],
          "resolvedModules": {
            "./filePresent": 0,
            "./fileNotFound": 1
          },
          "includeReasons": [
            {
              "kind": 0,
              "index": 0
            }
          ]
        },
        {
          "fileName": "./src/globalFilePresent.ts",
          "originalFileName": "./src/globalFilePresent.ts",
          "path": "./src/globalfilepresent.ts",
          "resolvedPath": "./src/globalfilepresent.ts",
          "version": "-5627034801-function globalSomething() { return 10; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalanotherfilewithsamereferenes.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 3
            },
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 0
            }
          ]
        },
        {
          "fileName": "./src/globalAnotherFileWithSameReferenes.ts",
          "originalFileName": "./src/globalAnotherFileWithSameReferenes.ts",
          "path": "./src/globalanotherfilewithsamereferenes.ts",
          "resolvedPath": "./src/globalanotherfilewithsamereferenes.ts",
          "version": "-4448253777-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalAnotherFileWithSameReferenes() { }\n",
          "flags": 0,
          "referencedFiles": [
            "../../globalFilePresent.ts",
            "../../globalFileNotFound.ts"
          ],
          "includeReasons": [
            {
              "kind": 0,
              "index": 2
            }
          ]
        },
        {
          "fileName": "./src/globalMain.ts",
          "originalFileName": "./src/globalMain.ts",
          "path": "./src/globalmain.ts",
          "resolvedPath": "./src/globalmain.ts",
          "version": "-12326309214-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalMain() { }\n",
          "flags": 0,
          "referencedFiles": [
            "../../globalFilePresent.ts",
            "../../globalFileNotFound.ts"
          ],
          "includeReasons": [
            {
              "kind": 0,
              "index": 4
            }
          ]
        },
        {
          "fileName": "./src/main.ts",
          "originalFileName": "./src/main.ts",
          "path": "./src/main.ts",
          "resolvedPath": "./src/main.ts",
          "version": "-9387417376-import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
          "flags": 0,
          "imports": [
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./fileNotFound"
            }
          ],
          "resolvedModules": {
            "./filePresent": 0,
            "./fileNotFound": 1
          },
          "includeReasons": [
            {
              "kind": 0,
              "index": 5
            }
          ]
        }
      ],
      "rootFileNames": [
        "./src/anotherFileReusingResolution.ts",
        "./src/filePresent.ts",
        "./src/globalAnotherFileWithSameReferenes.ts",
        "./src/globalFilePresent.ts",
        "./src/globalMain.ts",
        "./src/main.ts"
      ],
      "filesByName": {
        "./src/globalfilenotfound.ts": 0
      },
      "missingPaths": [
        "./src/globalfilenotfound.ts"
      ],
      "fileProcessingDiagnostics": [
        {
          "kind": 1,
          "fileProcessingReason": {
            "kind": 4,
            "file": "/src/project/src/globalanotherfilewithsamereferenes.ts",
            "index": 1
          },
          "diagnostic": "File_0_not_found",
          "args": [
            "/src/project/src/globalFileNotFound.ts"
          ]
        },
        {
          "kind": 1,
          "fileProcessingReason": {
            "kind": 4,
            "file": "/src/project/src/globalmain.ts",
            "index": 1
          },
          "diagnostic": "File_0_not_found",
          "args": [
            "/src/project/src/globalFileNotFound.ts"
          ]
        }
      ],
      "resolutions": [
        {
          "resolvedModule": {
            "resolvedFileName": "./src/filePresent.ts",
            "extension": ".ts"
          }
        },
        {
          "failedLookupLocations": [
            "./src/fileNotFound.ts",
            "./src/fileNotFound.tsx",
            "./src/fileNotFound.d.ts",
            "./src/fileNotFound.js",
            "./src/fileNotFound.jsx"
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}



Change:: no-change-run
Input::


Output::
/lib/tsc --b src/project
[96msrc/project/src/anotherFileReusingResolution.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m2[0m import { something2 } from "./fileNotFound";
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m

[96msrc/project/src/globalAnotherFileWithSameReferenes.ts[0m:[93m2[0m:[93m22[0m - [91merror[0m[90m TS6053: [0mFile '/src/project/src/globalFileNotFound.ts' not found.

[7m2[0m /// <reference path="./globalFileNotFound.ts"/>
[7m [0m [91m                     ~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/project/src/globalMain.ts[0m:[93m2[0m:[93m22[0m - [91merror[0m[90m TS6053: [0mFile '/src/project/src/globalFileNotFound.ts' not found.

[7m2[0m /// <reference path="./globalFileNotFound.ts"/>
[7m [0m [91m                     ~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/project/src/main.ts[0m:[93m3[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m3[0m import { something2 } from "./fileNotFound";
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m


Found 4 errors.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: ["/src/project/src/anotherFileReusingResolution.ts","/src/project/src/filePresent.ts","/src/project/src/globalAnotherFileWithSameReferenes.ts","/src/project/src/globalFilePresent.ts","/src/project/src/globalMain.ts","/src/project/src/main.ts"]
Program options: {"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: Completely
Program files::
/lib/lib.d.ts
/src/project/src/filePresent.ts
/src/project/src/anotherFileReusingResolution.ts
/src/project/src/globalFilePresent.ts
/src/project/src/globalAnotherFileWithSameReferenes.ts
/src/project/src/globalMain.ts
/src/project/src/main.ts

Semantic diagnostics in builder refreshed for::




Change:: Modify globalMain file
Input::
//// [/src/project/src/globalMain.ts]
/// <reference path="./globalFilePresent.ts"/>
/// <reference path="./globalFileNotFound.ts"/>
function globalMain() { }
globalSomething();



Output::
/lib/tsc --b src/project
Reusing resolution of module './filePresent' from '/src/project/src/anotherFileReusingResolution.ts' of old program, it was successfully resolved to '/src/project/src/filePresent.ts'.
Reusing resolution of module './fileNotFound' from '/src/project/src/anotherFileReusingResolution.ts' of old program, it was not resolved.
Reusing resolution of module './filePresent' from '/src/project/src/main.ts' of old program, it was successfully resolved to '/src/project/src/filePresent.ts'.
Reusing resolution of module './filePresent' from '/src/project/src/main.ts' of old program, it was successfully resolved to '/src/project/src/filePresent.ts'.
Reusing resolution of module './fileNotFound' from '/src/project/src/main.ts' of old program, it was not resolved.
[96msrc/project/src/anotherFileReusingResolution.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m2[0m import { something2 } from "./fileNotFound";
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m

[96msrc/project/src/globalAnotherFileWithSameReferenes.ts[0m:[93m2[0m:[93m22[0m - [91merror[0m[90m TS6053: [0mFile '/src/project/src/globalFileNotFound.ts' not found.

[7m2[0m /// <reference path="./globalFileNotFound.ts"/>
[7m [0m [91m                     ~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/project/src/globalMain.ts[0m:[93m2[0m:[93m22[0m - [91merror[0m[90m TS6053: [0mFile '/src/project/src/globalFileNotFound.ts' not found.

[7m2[0m /// <reference path="./globalFileNotFound.ts"/>
[7m [0m [91m                     ~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/project/src/main.ts[0m:[93m3[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m3[0m import { something2 } from "./fileNotFound";
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m


Found 4 errors.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: ["/src/project/src/anotherFileReusingResolution.ts","/src/project/src/filePresent.ts","/src/project/src/globalAnotherFileWithSameReferenes.ts","/src/project/src/globalFilePresent.ts","/src/project/src/globalMain.ts","/src/project/src/main.ts"]
Program options: {"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: SafeModules
Program files::
/lib/lib.d.ts
/src/project/src/filePresent.ts
/src/project/src/anotherFileReusingResolution.ts
/src/project/src/globalFilePresent.ts
/src/project/src/globalAnotherFileWithSameReferenes.ts
/src/project/src/globalMain.ts
/src/project/src/main.ts

Semantic diagnostics in builder refreshed for::
/src/project/src/globalMain.ts


//// [/src/project/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./src/filepresent.ts": {
        "version": "11598859296-export function something() { return 10; }",
        "signature": "-15062742831-export declare function something(): number;\r\n",
        "affectsGlobalScope": false
      },
      "./src/anotherfilereusingresolution.ts": {
        "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      },
      "./src/globalfilepresent.ts": {
        "version": "-5627034801-function globalSomething() { return 10; }",
        "signature": "-6032143744-declare function globalSomething(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalanotherfilewithsamereferenes.ts": {
        "version": "-4448253777-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalAnotherFileWithSameReferenes() { }\n",
        "signature": "-18812905712-/// <reference path=\"globalFilePresent.d.ts\" />\r\ndeclare function globalAnotherFileWithSameReferenes(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalmain.ts": {
        "version": "-5695225267-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalMain() { }\nglobalSomething();",
        "signature": "-19927227517-/// <reference path=\"globalFilePresent.d.ts\" />\r\ndeclare function globalMain(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/main.ts": {
        "version": "-9387417376-import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      }
    },
    "options": {
      "module": 2,
      "composite": true,
      "persistResolutions": true,
      "traceResolution": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {
      "./src/anotherfilereusingresolution.ts": [
        "./src/filepresent.ts"
      ],
      "./src/globalanotherfilewithsamereferenes.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts"
      ],
      "./src/globalmain.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts"
      ],
      "./src/main.ts": [
        "./src/filepresent.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      [
        "./src/anotherfilereusingresolution.ts",
        [
          {
            "file": "./src/anotherfilereusingresolution.ts",
            "start": 70,
            "length": 16,
            "messageText": "Cannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?",
            "category": 1,
            "code": 2792
          }
        ]
      ],
      "./src/filepresent.ts",
      "./src/globalanotherfilewithsamereferenes.ts",
      "./src/globalfilepresent.ts",
      "./src/globalmain.ts",
      [
        "./src/main.ts",
        [
          {
            "file": "./src/main.ts",
            "start": 127,
            "length": 16,
            "messageText": "Cannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?",
            "category": 1,
            "code": 2792
          }
        ]
      ]
    ],
    "affectedFilesPendingEmit": [
      [
        "./src/anotherfilereusingresolution.ts",
        1
      ],
      [
        "./src/filepresent.ts",
        1
      ],
      [
        "./src/globalanotherfilewithsamereferenes.ts",
        1
      ],
      [
        "./src/globalfilepresent.ts",
        1
      ],
      [
        "./src/globalmain.ts",
        1
      ],
      [
        "./src/main.ts",
        1
      ]
    ],
    "peristedProgram": {
      "files": [
        {
          "fileName": "../../lib/lib.d.ts",
          "originalFileName": "../../lib/lib.d.ts",
          "path": "../../lib/lib.d.ts",
          "resolvedPath": "../../lib/lib.d.ts",
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "flags": 0,
          "hasNoDefaultLib": true,
          "includeReasons": [
            {
              "kind": 6
            }
          ]
        },
        {
          "fileName": "./src/filePresent.ts",
          "originalFileName": "./src/filePresent.ts",
          "path": "./src/filepresent.ts",
          "resolvedPath": "./src/filepresent.ts",
          "version": "11598859296-export function something() { return 10; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 3,
              "file": "./src/anotherfilereusingresolution.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 1
            },
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 0
            },
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 1
            }
          ]
        },
        {
          "fileName": "./src/anotherFileReusingResolution.ts",
          "originalFileName": "./src/anotherFileReusingResolution.ts",
          "path": "./src/anotherfilereusingresolution.ts",
          "resolvedPath": "./src/anotherfilereusingresolution.ts",
          "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
          "flags": 0,
          "imports": [
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./fileNotFound"
            }
          ],
          "resolvedModules": {
            "./filePresent": 0,
            "./fileNotFound": 1
          },
          "includeReasons": [
            {
              "kind": 0,
              "index": 0
            }
          ]
        },
        {
          "fileName": "./src/globalFilePresent.ts",
          "originalFileName": "./src/globalFilePresent.ts",
          "path": "./src/globalfilepresent.ts",
          "resolvedPath": "./src/globalfilepresent.ts",
          "version": "-5627034801-function globalSomething() { return 10; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalanotherfilewithsamereferenes.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 3
            },
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 0
            }
          ]
        },
        {
          "fileName": "./src/globalAnotherFileWithSameReferenes.ts",
          "originalFileName": "./src/globalAnotherFileWithSameReferenes.ts",
          "path": "./src/globalanotherfilewithsamereferenes.ts",
          "resolvedPath": "./src/globalanotherfilewithsamereferenes.ts",
          "version": "-4448253777-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalAnotherFileWithSameReferenes() { }\n",
          "flags": 0,
          "referencedFiles": [
            "../../globalFilePresent.ts",
            "../../globalFileNotFound.ts"
          ],
          "includeReasons": [
            {
              "kind": 0,
              "index": 2
            }
          ]
        },
        {
          "fileName": "./src/globalMain.ts",
          "originalFileName": "./src/globalMain.ts",
          "path": "./src/globalmain.ts",
          "resolvedPath": "./src/globalmain.ts",
          "version": "-5695225267-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalMain() { }\nglobalSomething();",
          "flags": 0,
          "referencedFiles": [
            "../../globalFilePresent.ts",
            "../../globalFileNotFound.ts"
          ],
          "includeReasons": [
            {
              "kind": 0,
              "index": 4
            }
          ]
        },
        {
          "fileName": "./src/main.ts",
          "originalFileName": "./src/main.ts",
          "path": "./src/main.ts",
          "resolvedPath": "./src/main.ts",
          "version": "-9387417376-import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
          "flags": 0,
          "imports": [
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./fileNotFound"
            }
          ],
          "resolvedModules": {
            "./filePresent": 0,
            "./fileNotFound": 1
          },
          "includeReasons": [
            {
              "kind": 0,
              "index": 5
            }
          ]
        }
      ],
      "rootFileNames": [
        "./src/anotherFileReusingResolution.ts",
        "./src/filePresent.ts",
        "./src/globalAnotherFileWithSameReferenes.ts",
        "./src/globalFilePresent.ts",
        "./src/globalMain.ts",
        "./src/main.ts"
      ],
      "filesByName": {
        "./src/globalfilenotfound.ts": 0
      },
      "missingPaths": [
        "./src/globalfilenotfound.ts"
      ],
      "fileProcessingDiagnostics": [
        {
          "kind": 1,
          "fileProcessingReason": {
            "kind": 4,
            "file": "/src/project/src/globalanotherfilewithsamereferenes.ts",
            "index": 1
          },
          "diagnostic": "File_0_not_found",
          "args": [
            "/src/project/src/globalFileNotFound.ts"
          ]
        },
        {
          "kind": 1,
          "fileProcessingReason": {
            "kind": 4,
            "file": "/src/project/src/globalmain.ts",
            "index": 1
          },
          "diagnostic": "File_0_not_found",
          "args": [
            "/src/project/src/globalFileNotFound.ts"
          ]
        }
      ],
      "resolutions": [
        {
          "resolvedModule": {
            "resolvedFileName": "./src/filePresent.ts",
            "extension": ".ts"
          }
        },
        {
          "failedLookupLocations": [
            "./src/fileNotFound.ts",
            "./src/fileNotFound.tsx",
            "./src/fileNotFound.d.ts",
            "./src/fileNotFound.js",
            "./src/fileNotFound.jsx"
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}



Change:: Add new globalFile and update globalMain file
Input::
//// [/src/project/src/globalMain.ts]
/// <reference path="./globalNewFile.ts"/>
/// <reference path="./globalFilePresent.ts"/>
/// <reference path="./globalFileNotFound.ts"/>
function globalMain() { }
globalSomething();globalFoo();

//// [/src/project/src/globalNewFile.ts]
function globalFoo() { return 20; }



Output::
/lib/tsc --b src/project
Reusing resolution of module './filePresent' from '/src/project/src/anotherFileReusingResolution.ts' of old program, it was successfully resolved to '/src/project/src/filePresent.ts'.
Reusing resolution of module './fileNotFound' from '/src/project/src/anotherFileReusingResolution.ts' of old program, it was not resolved.
Reusing resolution of module './filePresent' from '/src/project/src/main.ts' of old program, it was successfully resolved to '/src/project/src/filePresent.ts'.
Reusing resolution of module './filePresent' from '/src/project/src/main.ts' of old program, it was successfully resolved to '/src/project/src/filePresent.ts'.
Reusing resolution of module './fileNotFound' from '/src/project/src/main.ts' of old program, it was not resolved.
[96msrc/project/src/anotherFileReusingResolution.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m2[0m import { something2 } from "./fileNotFound";
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m

[96msrc/project/src/globalAnotherFileWithSameReferenes.ts[0m:[93m2[0m:[93m22[0m - [91merror[0m[90m TS6053: [0mFile '/src/project/src/globalFileNotFound.ts' not found.

[7m2[0m /// <reference path="./globalFileNotFound.ts"/>
[7m [0m [91m                     ~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/project/src/globalMain.ts[0m:[93m3[0m:[93m22[0m - [91merror[0m[90m TS6053: [0mFile '/src/project/src/globalFileNotFound.ts' not found.

[7m3[0m /// <reference path="./globalFileNotFound.ts"/>
[7m [0m [91m                     ~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/project/src/main.ts[0m:[93m3[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m3[0m import { something2 } from "./fileNotFound";
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m


Found 4 errors.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: ["/src/project/src/anotherFileReusingResolution.ts","/src/project/src/filePresent.ts","/src/project/src/globalAnotherFileWithSameReferenes.ts","/src/project/src/globalFilePresent.ts","/src/project/src/globalMain.ts","/src/project/src/globalNewFile.ts","/src/project/src/main.ts"]
Program options: {"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: SafeModules
Program files::
/lib/lib.d.ts
/src/project/src/filePresent.ts
/src/project/src/anotherFileReusingResolution.ts
/src/project/src/globalFilePresent.ts
/src/project/src/globalAnotherFileWithSameReferenes.ts
/src/project/src/globalNewFile.ts
/src/project/src/globalMain.ts
/src/project/src/main.ts

Semantic diagnostics in builder refreshed for::
/lib/lib.d.ts
/src/project/src/filePresent.ts
/src/project/src/anotherFileReusingResolution.ts
/src/project/src/globalFilePresent.ts
/src/project/src/globalAnotherFileWithSameReferenes.ts
/src/project/src/globalNewFile.ts
/src/project/src/globalMain.ts
/src/project/src/main.ts


//// [/src/project/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./src/filepresent.ts": {
        "version": "11598859296-export function something() { return 10; }",
        "signature": "-15062742831-export declare function something(): number;\r\n",
        "affectsGlobalScope": false
      },
      "./src/anotherfilereusingresolution.ts": {
        "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      },
      "./src/globalfilepresent.ts": {
        "version": "-5627034801-function globalSomething() { return 10; }",
        "signature": "-6032143744-declare function globalSomething(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalanotherfilewithsamereferenes.ts": {
        "version": "-4448253777-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalAnotherFileWithSameReferenes() { }\n",
        "signature": "-18812905712-/// <reference path=\"globalFilePresent.d.ts\" />\r\ndeclare function globalAnotherFileWithSameReferenes(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalnewfile.ts": {
        "version": "4916490342-function globalFoo() { return 20; }",
        "signature": "4157970454-declare function globalFoo(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalmain.ts": {
        "version": "-7686833800-/// <reference path=\"./globalNewFile.ts\"/>\n/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalMain() { }\nglobalSomething();globalFoo();",
        "signature": "604791887-/// <reference path=\"globalNewFile.d.ts\" />\r\n/// <reference path=\"globalFilePresent.d.ts\" />\r\ndeclare function globalMain(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/main.ts": {
        "version": "-9387417376-import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      }
    },
    "options": {
      "module": 2,
      "composite": true,
      "persistResolutions": true,
      "traceResolution": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {
      "./src/anotherfilereusingresolution.ts": [
        "./src/filepresent.ts"
      ],
      "./src/globalanotherfilewithsamereferenes.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts"
      ],
      "./src/globalmain.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts",
        "./src/globalnewfile.ts"
      ],
      "./src/main.ts": [
        "./src/filepresent.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      [
        "./src/anotherfilereusingresolution.ts",
        [
          {
            "file": "./src/anotherfilereusingresolution.ts",
            "start": 70,
            "length": 16,
            "messageText": "Cannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?",
            "category": 1,
            "code": 2792
          }
        ]
      ],
      "./src/filepresent.ts",
      "./src/globalanotherfilewithsamereferenes.ts",
      "./src/globalfilepresent.ts",
      "./src/globalmain.ts",
      "./src/globalnewfile.ts",
      [
        "./src/main.ts",
        [
          {
            "file": "./src/main.ts",
            "start": 127,
            "length": 16,
            "messageText": "Cannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?",
            "category": 1,
            "code": 2792
          }
        ]
      ]
    ],
    "affectedFilesPendingEmit": [
      [
        "./src/anotherfilereusingresolution.ts",
        1
      ],
      [
        "./src/filepresent.ts",
        1
      ],
      [
        "./src/globalanotherfilewithsamereferenes.ts",
        1
      ],
      [
        "./src/globalfilepresent.ts",
        1
      ],
      [
        "./src/globalmain.ts",
        1
      ],
      [
        "./src/globalnewfile.ts",
        1
      ],
      [
        "./src/main.ts",
        1
      ]
    ],
    "peristedProgram": {
      "files": [
        {
          "fileName": "../../lib/lib.d.ts",
          "originalFileName": "../../lib/lib.d.ts",
          "path": "../../lib/lib.d.ts",
          "resolvedPath": "../../lib/lib.d.ts",
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "flags": 0,
          "hasNoDefaultLib": true,
          "includeReasons": [
            {
              "kind": 6
            }
          ]
        },
        {
          "fileName": "./src/filePresent.ts",
          "originalFileName": "./src/filePresent.ts",
          "path": "./src/filepresent.ts",
          "resolvedPath": "./src/filepresent.ts",
          "version": "11598859296-export function something() { return 10; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 3,
              "file": "./src/anotherfilereusingresolution.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 1
            },
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 0
            },
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 1
            }
          ]
        },
        {
          "fileName": "./src/anotherFileReusingResolution.ts",
          "originalFileName": "./src/anotherFileReusingResolution.ts",
          "path": "./src/anotherfilereusingresolution.ts",
          "resolvedPath": "./src/anotherfilereusingresolution.ts",
          "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
          "flags": 0,
          "imports": [
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./fileNotFound"
            }
          ],
          "resolvedModules": {
            "./filePresent": 0,
            "./fileNotFound": 1
          },
          "includeReasons": [
            {
              "kind": 0,
              "index": 0
            }
          ]
        },
        {
          "fileName": "./src/globalFilePresent.ts",
          "originalFileName": "./src/globalFilePresent.ts",
          "path": "./src/globalfilepresent.ts",
          "resolvedPath": "./src/globalfilepresent.ts",
          "version": "-5627034801-function globalSomething() { return 10; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalanotherfilewithsamereferenes.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 3
            },
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 1
            }
          ]
        },
        {
          "fileName": "./src/globalAnotherFileWithSameReferenes.ts",
          "originalFileName": "./src/globalAnotherFileWithSameReferenes.ts",
          "path": "./src/globalanotherfilewithsamereferenes.ts",
          "resolvedPath": "./src/globalanotherfilewithsamereferenes.ts",
          "version": "-4448253777-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalAnotherFileWithSameReferenes() { }\n",
          "flags": 0,
          "referencedFiles": [
            "../../globalFilePresent.ts",
            "../../globalFileNotFound.ts"
          ],
          "includeReasons": [
            {
              "kind": 0,
              "index": 2
            }
          ]
        },
        {
          "fileName": "./src/globalNewFile.ts",
          "originalFileName": "./src/globalNewFile.ts",
          "path": "./src/globalnewfile.ts",
          "resolvedPath": "./src/globalnewfile.ts",
          "version": "4916490342-function globalFoo() { return 20; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 5
            }
          ]
        },
        {
          "fileName": "./src/globalMain.ts",
          "originalFileName": "./src/globalMain.ts",
          "path": "./src/globalmain.ts",
          "resolvedPath": "./src/globalmain.ts",
          "version": "-7686833800-/// <reference path=\"./globalNewFile.ts\"/>\n/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalMain() { }\nglobalSomething();globalFoo();",
          "flags": 0,
          "referencedFiles": [
            "../../globalNewFile.ts",
            "../../globalFilePresent.ts",
            "../../globalFileNotFound.ts"
          ],
          "includeReasons": [
            {
              "kind": 0,
              "index": 4
            }
          ]
        },
        {
          "fileName": "./src/main.ts",
          "originalFileName": "./src/main.ts",
          "path": "./src/main.ts",
          "resolvedPath": "./src/main.ts",
          "version": "-9387417376-import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
          "flags": 0,
          "imports": [
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./fileNotFound"
            }
          ],
          "resolvedModules": {
            "./filePresent": 0,
            "./fileNotFound": 1
          },
          "includeReasons": [
            {
              "kind": 0,
              "index": 6
            }
          ]
        }
      ],
      "rootFileNames": [
        "./src/anotherFileReusingResolution.ts",
        "./src/filePresent.ts",
        "./src/globalAnotherFileWithSameReferenes.ts",
        "./src/globalFilePresent.ts",
        "./src/globalMain.ts",
        "./src/globalNewFile.ts",
        "./src/main.ts"
      ],
      "filesByName": {
        "./src/globalfilenotfound.ts": 0
      },
      "missingPaths": [
        "./src/globalfilenotfound.ts"
      ],
      "fileProcessingDiagnostics": [
        {
          "kind": 1,
          "fileProcessingReason": {
            "kind": 4,
            "file": "/src/project/src/globalanotherfilewithsamereferenes.ts",
            "index": 1
          },
          "diagnostic": "File_0_not_found",
          "args": [
            "/src/project/src/globalFileNotFound.ts"
          ]
        },
        {
          "kind": 1,
          "fileProcessingReason": {
            "kind": 4,
            "file": "/src/project/src/globalmain.ts",
            "index": 2
          },
          "diagnostic": "File_0_not_found",
          "args": [
            "/src/project/src/globalFileNotFound.ts"
          ]
        }
      ],
      "resolutions": [
        {
          "resolvedModule": {
            "resolvedFileName": "./src/filePresent.ts",
            "extension": ".ts"
          }
        },
        {
          "failedLookupLocations": [
            "./src/fileNotFound.ts",
            "./src/fileNotFound.tsx",
            "./src/fileNotFound.d.ts",
            "./src/fileNotFound.js",
            "./src/fileNotFound.jsx"
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}



Change:: Write file that could not be resolved by referenced path
Input::
//// [/src/project/src/globalFileNotFound.ts]
function globalSomething2() { return 20; }



Output::
/lib/tsc --b src/project
Reusing resolution of module './filePresent' from '/src/project/src/anotherFileReusingResolution.ts' of old program, it was successfully resolved to '/src/project/src/filePresent.ts'.
Reusing resolution of module './fileNotFound' from '/src/project/src/anotherFileReusingResolution.ts' of old program, it was not resolved.
Reusing resolution of module './filePresent' from '/src/project/src/main.ts' of old program, it was successfully resolved to '/src/project/src/filePresent.ts'.
Reusing resolution of module './filePresent' from '/src/project/src/main.ts' of old program, it was successfully resolved to '/src/project/src/filePresent.ts'.
Reusing resolution of module './fileNotFound' from '/src/project/src/main.ts' of old program, it was not resolved.
[96msrc/project/src/anotherFileReusingResolution.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m2[0m import { something2 } from "./fileNotFound";
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m

[96msrc/project/src/main.ts[0m:[93m3[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m3[0m import { something2 } from "./fileNotFound";
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m


Found 2 errors.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: ["/src/project/src/anotherFileReusingResolution.ts","/src/project/src/filePresent.ts","/src/project/src/globalAnotherFileWithSameReferenes.ts","/src/project/src/globalFileNotFound.ts","/src/project/src/globalFilePresent.ts","/src/project/src/globalMain.ts","/src/project/src/globalNewFile.ts","/src/project/src/main.ts"]
Program options: {"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: SafeModules
Program files::
/lib/lib.d.ts
/src/project/src/filePresent.ts
/src/project/src/anotherFileReusingResolution.ts
/src/project/src/globalFilePresent.ts
/src/project/src/globalFileNotFound.ts
/src/project/src/globalAnotherFileWithSameReferenes.ts
/src/project/src/globalNewFile.ts
/src/project/src/globalMain.ts
/src/project/src/main.ts

Semantic diagnostics in builder refreshed for::
/lib/lib.d.ts
/src/project/src/filePresent.ts
/src/project/src/anotherFileReusingResolution.ts
/src/project/src/globalFilePresent.ts
/src/project/src/globalFileNotFound.ts
/src/project/src/globalAnotherFileWithSameReferenes.ts
/src/project/src/globalNewFile.ts
/src/project/src/globalMain.ts
/src/project/src/main.ts


//// [/src/project/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./src/filepresent.ts": {
        "version": "11598859296-export function something() { return 10; }",
        "signature": "-15062742831-export declare function something(): number;\r\n",
        "affectsGlobalScope": false
      },
      "./src/anotherfilereusingresolution.ts": {
        "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      },
      "./src/globalfilepresent.ts": {
        "version": "-5627034801-function globalSomething() { return 10; }",
        "signature": "-6032143744-declare function globalSomething(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalfilenotfound.ts": {
        "version": "-6310824062-function globalSomething2() { return 20; }",
        "signature": "-7753781454-declare function globalSomething2(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalanotherfilewithsamereferenes.ts": {
        "version": "-4448253777-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalAnotherFileWithSameReferenes() { }\n",
        "signature": "-18570932929-/// <reference path=\"globalFilePresent.d.ts\" />\r\n/// <reference path=\"globalFileNotFound.d.ts\" />\r\ndeclare function globalAnotherFileWithSameReferenes(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalnewfile.ts": {
        "version": "4916490342-function globalFoo() { return 20; }",
        "signature": "4157970454-declare function globalFoo(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalmain.ts": {
        "version": "-7686833800-/// <reference path=\"./globalNewFile.ts\"/>\n/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalMain() { }\nglobalSomething();globalFoo();",
        "signature": "3235645566-/// <reference path=\"globalNewFile.d.ts\" />\r\n/// <reference path=\"globalFilePresent.d.ts\" />\r\n/// <reference path=\"globalFileNotFound.d.ts\" />\r\ndeclare function globalMain(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/main.ts": {
        "version": "-9387417376-import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      }
    },
    "options": {
      "module": 2,
      "composite": true,
      "persistResolutions": true,
      "traceResolution": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {
      "./src/anotherfilereusingresolution.ts": [
        "./src/filepresent.ts"
      ],
      "./src/globalanotherfilewithsamereferenes.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts"
      ],
      "./src/globalmain.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts",
        "./src/globalnewfile.ts"
      ],
      "./src/main.ts": [
        "./src/filepresent.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      [
        "./src/anotherfilereusingresolution.ts",
        [
          {
            "file": "./src/anotherfilereusingresolution.ts",
            "start": 70,
            "length": 16,
            "messageText": "Cannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?",
            "category": 1,
            "code": 2792
          }
        ]
      ],
      "./src/filepresent.ts",
      "./src/globalanotherfilewithsamereferenes.ts",
      "./src/globalfilenotfound.ts",
      "./src/globalfilepresent.ts",
      "./src/globalmain.ts",
      "./src/globalnewfile.ts",
      [
        "./src/main.ts",
        [
          {
            "file": "./src/main.ts",
            "start": 127,
            "length": 16,
            "messageText": "Cannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?",
            "category": 1,
            "code": 2792
          }
        ]
      ]
    ],
    "affectedFilesPendingEmit": [
      [
        "./src/anotherfilereusingresolution.ts",
        1
      ],
      [
        "./src/filepresent.ts",
        1
      ],
      [
        "./src/globalanotherfilewithsamereferenes.ts",
        1
      ],
      [
        "./src/globalfilenotfound.ts",
        1
      ],
      [
        "./src/globalfilepresent.ts",
        1
      ],
      [
        "./src/globalmain.ts",
        1
      ],
      [
        "./src/globalnewfile.ts",
        1
      ],
      [
        "./src/main.ts",
        1
      ]
    ],
    "peristedProgram": {
      "files": [
        {
          "fileName": "../../lib/lib.d.ts",
          "originalFileName": "../../lib/lib.d.ts",
          "path": "../../lib/lib.d.ts",
          "resolvedPath": "../../lib/lib.d.ts",
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "flags": 0,
          "hasNoDefaultLib": true,
          "includeReasons": [
            {
              "kind": 6
            }
          ]
        },
        {
          "fileName": "./src/filePresent.ts",
          "originalFileName": "./src/filePresent.ts",
          "path": "./src/filepresent.ts",
          "resolvedPath": "./src/filepresent.ts",
          "version": "11598859296-export function something() { return 10; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 3,
              "file": "./src/anotherfilereusingresolution.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 1
            },
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 0
            },
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 1
            }
          ]
        },
        {
          "fileName": "./src/anotherFileReusingResolution.ts",
          "originalFileName": "./src/anotherFileReusingResolution.ts",
          "path": "./src/anotherfilereusingresolution.ts",
          "resolvedPath": "./src/anotherfilereusingresolution.ts",
          "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
          "flags": 0,
          "imports": [
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./fileNotFound"
            }
          ],
          "resolvedModules": {
            "./filePresent": 0,
            "./fileNotFound": 1
          },
          "includeReasons": [
            {
              "kind": 0,
              "index": 0
            }
          ]
        },
        {
          "fileName": "./src/globalFilePresent.ts",
          "originalFileName": "./src/globalFilePresent.ts",
          "path": "./src/globalfilepresent.ts",
          "resolvedPath": "./src/globalfilepresent.ts",
          "version": "-5627034801-function globalSomething() { return 10; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalanotherfilewithsamereferenes.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 4
            },
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 1
            }
          ]
        },
        {
          "fileName": "./src/globalFileNotFound.ts",
          "originalFileName": "./src/globalFileNotFound.ts",
          "path": "./src/globalfilenotfound.ts",
          "resolvedPath": "./src/globalfilenotfound.ts",
          "version": "-6310824062-function globalSomething2() { return 20; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalanotherfilewithsamereferenes.ts",
              "index": 1
            },
            {
              "kind": 0,
              "index": 3
            },
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 2
            }
          ]
        },
        {
          "fileName": "./src/globalAnotherFileWithSameReferenes.ts",
          "originalFileName": "./src/globalAnotherFileWithSameReferenes.ts",
          "path": "./src/globalanotherfilewithsamereferenes.ts",
          "resolvedPath": "./src/globalanotherfilewithsamereferenes.ts",
          "version": "-4448253777-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalAnotherFileWithSameReferenes() { }\n",
          "flags": 0,
          "referencedFiles": [
            "../../globalFilePresent.ts",
            "../../globalFileNotFound.ts"
          ],
          "includeReasons": [
            {
              "kind": 0,
              "index": 2
            }
          ]
        },
        {
          "fileName": "./src/globalNewFile.ts",
          "originalFileName": "./src/globalNewFile.ts",
          "path": "./src/globalnewfile.ts",
          "resolvedPath": "./src/globalnewfile.ts",
          "version": "4916490342-function globalFoo() { return 20; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 6
            }
          ]
        },
        {
          "fileName": "./src/globalMain.ts",
          "originalFileName": "./src/globalMain.ts",
          "path": "./src/globalmain.ts",
          "resolvedPath": "./src/globalmain.ts",
          "version": "-7686833800-/// <reference path=\"./globalNewFile.ts\"/>\n/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalMain() { }\nglobalSomething();globalFoo();",
          "flags": 0,
          "referencedFiles": [
            "../../globalNewFile.ts",
            "../../globalFilePresent.ts",
            "../../globalFileNotFound.ts"
          ],
          "includeReasons": [
            {
              "kind": 0,
              "index": 5
            }
          ]
        },
        {
          "fileName": "./src/main.ts",
          "originalFileName": "./src/main.ts",
          "path": "./src/main.ts",
          "resolvedPath": "./src/main.ts",
          "version": "-9387417376-import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
          "flags": 0,
          "imports": [
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./fileNotFound"
            }
          ],
          "resolvedModules": {
            "./filePresent": 0,
            "./fileNotFound": 1
          },
          "includeReasons": [
            {
              "kind": 0,
              "index": 7
            }
          ]
        }
      ],
      "rootFileNames": [
        "./src/anotherFileReusingResolution.ts",
        "./src/filePresent.ts",
        "./src/globalAnotherFileWithSameReferenes.ts",
        "./src/globalFileNotFound.ts",
        "./src/globalFilePresent.ts",
        "./src/globalMain.ts",
        "./src/globalNewFile.ts",
        "./src/main.ts"
      ],
      "resolutions": [
        {
          "resolvedModule": {
            "resolvedFileName": "./src/filePresent.ts",
            "extension": ".ts"
          }
        },
        {
          "failedLookupLocations": [
            "./src/fileNotFound.ts",
            "./src/fileNotFound.tsx",
            "./src/fileNotFound.d.ts",
            "./src/fileNotFound.js",
            "./src/fileNotFound.jsx"
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}



Change:: Clean resolutions
Input::


Output::
/lib/tsc --b src/project --cleanPersistedProgram
exitCode:: ExitStatus.Success


//// [/src/project/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./src/filepresent.ts": {
        "version": "11598859296-export function something() { return 10; }",
        "signature": "-15062742831-export declare function something(): number;\r\n",
        "affectsGlobalScope": false
      },
      "./src/anotherfilereusingresolution.ts": {
        "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      },
      "./src/globalfilepresent.ts": {
        "version": "-5627034801-function globalSomething() { return 10; }",
        "signature": "-6032143744-declare function globalSomething(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalfilenotfound.ts": {
        "version": "-6310824062-function globalSomething2() { return 20; }",
        "signature": "-7753781454-declare function globalSomething2(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalanotherfilewithsamereferenes.ts": {
        "version": "-4448253777-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalAnotherFileWithSameReferenes() { }\n",
        "signature": "-18570932929-/// <reference path=\"globalFilePresent.d.ts\" />\r\n/// <reference path=\"globalFileNotFound.d.ts\" />\r\ndeclare function globalAnotherFileWithSameReferenes(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalnewfile.ts": {
        "version": "4916490342-function globalFoo() { return 20; }",
        "signature": "4157970454-declare function globalFoo(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalmain.ts": {
        "version": "-7686833800-/// <reference path=\"./globalNewFile.ts\"/>\n/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalMain() { }\nglobalSomething();globalFoo();",
        "signature": "3235645566-/// <reference path=\"globalNewFile.d.ts\" />\r\n/// <reference path=\"globalFilePresent.d.ts\" />\r\n/// <reference path=\"globalFileNotFound.d.ts\" />\r\ndeclare function globalMain(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/main.ts": {
        "version": "-9387417376-import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      }
    },
    "options": {
      "module": 2,
      "composite": true,
      "persistResolutions": true,
      "traceResolution": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {
      "./src/anotherfilereusingresolution.ts": [
        "./src/filepresent.ts"
      ],
      "./src/globalanotherfilewithsamereferenes.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts"
      ],
      "./src/globalmain.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts",
        "./src/globalnewfile.ts"
      ],
      "./src/main.ts": [
        "./src/filepresent.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      [
        "./src/anotherfilereusingresolution.ts",
        [
          {
            "file": "./src/anotherfilereusingresolution.ts",
            "start": 70,
            "length": 16,
            "messageText": "Cannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?",
            "category": 1,
            "code": 2792
          }
        ]
      ],
      "./src/filepresent.ts",
      "./src/globalanotherfilewithsamereferenes.ts",
      "./src/globalfilenotfound.ts",
      "./src/globalfilepresent.ts",
      "./src/globalmain.ts",
      "./src/globalnewfile.ts",
      [
        "./src/main.ts",
        [
          {
            "file": "./src/main.ts",
            "start": 127,
            "length": 16,
            "messageText": "Cannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?",
            "category": 1,
            "code": 2792
          }
        ]
      ]
    ],
    "affectedFilesPendingEmit": [
      [
        "./src/anotherfilereusingresolution.ts",
        1
      ],
      [
        "./src/filepresent.ts",
        1
      ],
      [
        "./src/globalanotherfilewithsamereferenes.ts",
        1
      ],
      [
        "./src/globalfilenotfound.ts",
        1
      ],
      [
        "./src/globalfilepresent.ts",
        1
      ],
      [
        "./src/globalmain.ts",
        1
      ],
      [
        "./src/globalnewfile.ts",
        1
      ],
      [
        "./src/main.ts",
        1
      ]
    ]
  },
  "version": "FakeTSVersion"
}



Change:: Clean resolutions again
Input::


Output::
/lib/tsc --b src/project --cleanPersistedProgram
exitCode:: ExitStatus.Success




Change:: no-change-run
Input::


Output::
/lib/tsc --b src/project
======== Resolving module './filePresent' from '/src/project/src/anotherFileReusingResolution.ts'. ========
Module resolution kind is not specified, using 'Classic'.
File '/src/project/src/filePresent.ts' exist - use it as a name resolution result.
======== Module name './filePresent' was successfully resolved to '/src/project/src/filePresent.ts'. ========
======== Resolving module './fileNotFound' from '/src/project/src/anotherFileReusingResolution.ts'. ========
Module resolution kind is not specified, using 'Classic'.
File '/src/project/src/fileNotFound.ts' does not exist.
File '/src/project/src/fileNotFound.tsx' does not exist.
File '/src/project/src/fileNotFound.d.ts' does not exist.
File '/src/project/src/fileNotFound.js' does not exist.
File '/src/project/src/fileNotFound.jsx' does not exist.
======== Module name './fileNotFound' was not resolved. ========
======== Resolving module './filePresent' from '/src/project/src/main.ts'. ========
Resolution for module './filePresent' was found in cache from location '/src/project/src'.
======== Module name './filePresent' was successfully resolved to '/src/project/src/filePresent.ts'. ========
======== Resolving module './fileNotFound' from '/src/project/src/main.ts'. ========
Resolution for module './fileNotFound' was found in cache from location '/src/project/src'.
======== Module name './fileNotFound' was not resolved. ========
[96msrc/project/src/anotherFileReusingResolution.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m2[0m import { something2 } from "./fileNotFound";
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m

[96msrc/project/src/main.ts[0m:[93m3[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m3[0m import { something2 } from "./fileNotFound";
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m


Found 2 errors.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: ["/src/project/src/anotherFileReusingResolution.ts","/src/project/src/filePresent.ts","/src/project/src/globalAnotherFileWithSameReferenes.ts","/src/project/src/globalFileNotFound.ts","/src/project/src/globalFilePresent.ts","/src/project/src/globalMain.ts","/src/project/src/globalNewFile.ts","/src/project/src/main.ts"]
Program options: {"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project/src/filePresent.ts
/src/project/src/anotherFileReusingResolution.ts
/src/project/src/globalFilePresent.ts
/src/project/src/globalFileNotFound.ts
/src/project/src/globalAnotherFileWithSameReferenes.ts
/src/project/src/globalNewFile.ts
/src/project/src/globalMain.ts
/src/project/src/main.ts

Semantic diagnostics in builder refreshed for::


//// [/src/project/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./src/filepresent.ts": {
        "version": "11598859296-export function something() { return 10; }",
        "signature": "-15062742831-export declare function something(): number;\r\n",
        "affectsGlobalScope": false
      },
      "./src/anotherfilereusingresolution.ts": {
        "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      },
      "./src/globalfilepresent.ts": {
        "version": "-5627034801-function globalSomething() { return 10; }",
        "signature": "-6032143744-declare function globalSomething(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalfilenotfound.ts": {
        "version": "-6310824062-function globalSomething2() { return 20; }",
        "signature": "-7753781454-declare function globalSomething2(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalanotherfilewithsamereferenes.ts": {
        "version": "-4448253777-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalAnotherFileWithSameReferenes() { }\n",
        "signature": "-18570932929-/// <reference path=\"globalFilePresent.d.ts\" />\r\n/// <reference path=\"globalFileNotFound.d.ts\" />\r\ndeclare function globalAnotherFileWithSameReferenes(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalnewfile.ts": {
        "version": "4916490342-function globalFoo() { return 20; }",
        "signature": "4157970454-declare function globalFoo(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalmain.ts": {
        "version": "-7686833800-/// <reference path=\"./globalNewFile.ts\"/>\n/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalMain() { }\nglobalSomething();globalFoo();",
        "signature": "3235645566-/// <reference path=\"globalNewFile.d.ts\" />\r\n/// <reference path=\"globalFilePresent.d.ts\" />\r\n/// <reference path=\"globalFileNotFound.d.ts\" />\r\ndeclare function globalMain(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/main.ts": {
        "version": "-9387417376-import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      }
    },
    "options": {
      "module": 2,
      "composite": true,
      "persistResolutions": true,
      "traceResolution": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {
      "./src/anotherfilereusingresolution.ts": [
        "./src/filepresent.ts"
      ],
      "./src/globalanotherfilewithsamereferenes.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts"
      ],
      "./src/globalmain.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts",
        "./src/globalnewfile.ts"
      ],
      "./src/main.ts": [
        "./src/filepresent.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      [
        "./src/anotherfilereusingresolution.ts",
        [
          {
            "file": "./src/anotherfilereusingresolution.ts",
            "start": 70,
            "length": 16,
            "messageText": "Cannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?",
            "category": 1,
            "code": 2792
          }
        ]
      ],
      "./src/filepresent.ts",
      "./src/globalanotherfilewithsamereferenes.ts",
      "./src/globalfilenotfound.ts",
      "./src/globalfilepresent.ts",
      "./src/globalmain.ts",
      "./src/globalnewfile.ts",
      [
        "./src/main.ts",
        [
          {
            "file": "./src/main.ts",
            "start": 127,
            "length": 16,
            "messageText": "Cannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?",
            "category": 1,
            "code": 2792
          }
        ]
      ]
    ],
    "affectedFilesPendingEmit": [
      [
        "./src/anotherfilereusingresolution.ts",
        1
      ],
      [
        "./src/filepresent.ts",
        1
      ],
      [
        "./src/globalanotherfilewithsamereferenes.ts",
        1
      ],
      [
        "./src/globalfilenotfound.ts",
        1
      ],
      [
        "./src/globalfilepresent.ts",
        1
      ],
      [
        "./src/globalmain.ts",
        1
      ],
      [
        "./src/globalnewfile.ts",
        1
      ],
      [
        "./src/main.ts",
        1
      ]
    ],
    "peristedProgram": {
      "files": [
        {
          "fileName": "../../lib/lib.d.ts",
          "originalFileName": "../../lib/lib.d.ts",
          "path": "../../lib/lib.d.ts",
          "resolvedPath": "../../lib/lib.d.ts",
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "flags": 0,
          "hasNoDefaultLib": true,
          "includeReasons": [
            {
              "kind": 6
            }
          ]
        },
        {
          "fileName": "./src/filePresent.ts",
          "originalFileName": "./src/filePresent.ts",
          "path": "./src/filepresent.ts",
          "resolvedPath": "./src/filepresent.ts",
          "version": "11598859296-export function something() { return 10; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 3,
              "file": "./src/anotherfilereusingresolution.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 1
            },
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 0
            },
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 1
            }
          ]
        },
        {
          "fileName": "./src/anotherFileReusingResolution.ts",
          "originalFileName": "./src/anotherFileReusingResolution.ts",
          "path": "./src/anotherfilereusingresolution.ts",
          "resolvedPath": "./src/anotherfilereusingresolution.ts",
          "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
          "flags": 0,
          "imports": [
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./fileNotFound"
            }
          ],
          "resolvedModules": {
            "./filePresent": 0,
            "./fileNotFound": 1
          },
          "includeReasons": [
            {
              "kind": 0,
              "index": 0
            }
          ]
        },
        {
          "fileName": "./src/globalFilePresent.ts",
          "originalFileName": "./src/globalFilePresent.ts",
          "path": "./src/globalfilepresent.ts",
          "resolvedPath": "./src/globalfilepresent.ts",
          "version": "-5627034801-function globalSomething() { return 10; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalanotherfilewithsamereferenes.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 4
            },
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 1
            }
          ]
        },
        {
          "fileName": "./src/globalFileNotFound.ts",
          "originalFileName": "./src/globalFileNotFound.ts",
          "path": "./src/globalfilenotfound.ts",
          "resolvedPath": "./src/globalfilenotfound.ts",
          "version": "-6310824062-function globalSomething2() { return 20; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalanotherfilewithsamereferenes.ts",
              "index": 1
            },
            {
              "kind": 0,
              "index": 3
            },
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 2
            }
          ]
        },
        {
          "fileName": "./src/globalAnotherFileWithSameReferenes.ts",
          "originalFileName": "./src/globalAnotherFileWithSameReferenes.ts",
          "path": "./src/globalanotherfilewithsamereferenes.ts",
          "resolvedPath": "./src/globalanotherfilewithsamereferenes.ts",
          "version": "-4448253777-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalAnotherFileWithSameReferenes() { }\n",
          "flags": 0,
          "referencedFiles": [
            "../../globalFilePresent.ts",
            "../../globalFileNotFound.ts"
          ],
          "includeReasons": [
            {
              "kind": 0,
              "index": 2
            }
          ]
        },
        {
          "fileName": "./src/globalNewFile.ts",
          "originalFileName": "./src/globalNewFile.ts",
          "path": "./src/globalnewfile.ts",
          "resolvedPath": "./src/globalnewfile.ts",
          "version": "4916490342-function globalFoo() { return 20; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 6
            }
          ]
        },
        {
          "fileName": "./src/globalMain.ts",
          "originalFileName": "./src/globalMain.ts",
          "path": "./src/globalmain.ts",
          "resolvedPath": "./src/globalmain.ts",
          "version": "-7686833800-/// <reference path=\"./globalNewFile.ts\"/>\n/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalMain() { }\nglobalSomething();globalFoo();",
          "flags": 0,
          "referencedFiles": [
            "../../globalNewFile.ts",
            "../../globalFilePresent.ts",
            "../../globalFileNotFound.ts"
          ],
          "includeReasons": [
            {
              "kind": 0,
              "index": 5
            }
          ]
        },
        {
          "fileName": "./src/main.ts",
          "originalFileName": "./src/main.ts",
          "path": "./src/main.ts",
          "resolvedPath": "./src/main.ts",
          "version": "-9387417376-import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
          "flags": 0,
          "imports": [
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./fileNotFound"
            }
          ],
          "resolvedModules": {
            "./filePresent": 0,
            "./fileNotFound": 1
          },
          "includeReasons": [
            {
              "kind": 0,
              "index": 7
            }
          ]
        }
      ],
      "rootFileNames": [
        "./src/anotherFileReusingResolution.ts",
        "./src/filePresent.ts",
        "./src/globalAnotherFileWithSameReferenes.ts",
        "./src/globalFileNotFound.ts",
        "./src/globalFilePresent.ts",
        "./src/globalMain.ts",
        "./src/globalNewFile.ts",
        "./src/main.ts"
      ],
      "resolutions": [
        {
          "resolvedModule": {
            "resolvedFileName": "./src/filePresent.ts",
            "extension": ".ts"
          }
        },
        {
          "failedLookupLocations": [
            "./src/fileNotFound.ts",
            "./src/fileNotFound.tsx",
            "./src/fileNotFound.d.ts",
            "./src/fileNotFound.js",
            "./src/fileNotFound.jsx"
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}



Change:: Modify global main file
Input::
//// [/src/project/src/globalMain.ts]
/// <reference path="./globalNewFile.ts"/>
/// <reference path="./globalFilePresent.ts"/>
/// <reference path="./globalFileNotFound.ts"/>
function globalMain() { }
globalSomething();globalFoo();globalSomething();



Output::
/lib/tsc --b src/project
Reusing resolution of module './filePresent' from '/src/project/src/anotherFileReusingResolution.ts' of old program, it was successfully resolved to '/src/project/src/filePresent.ts'.
Reusing resolution of module './fileNotFound' from '/src/project/src/anotherFileReusingResolution.ts' of old program, it was not resolved.
Reusing resolution of module './filePresent' from '/src/project/src/main.ts' of old program, it was successfully resolved to '/src/project/src/filePresent.ts'.
Reusing resolution of module './filePresent' from '/src/project/src/main.ts' of old program, it was successfully resolved to '/src/project/src/filePresent.ts'.
Reusing resolution of module './fileNotFound' from '/src/project/src/main.ts' of old program, it was not resolved.
[96msrc/project/src/anotherFileReusingResolution.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m2[0m import { something2 } from "./fileNotFound";
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m

[96msrc/project/src/main.ts[0m:[93m3[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m3[0m import { something2 } from "./fileNotFound";
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m


Found 2 errors.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: ["/src/project/src/anotherFileReusingResolution.ts","/src/project/src/filePresent.ts","/src/project/src/globalAnotherFileWithSameReferenes.ts","/src/project/src/globalFileNotFound.ts","/src/project/src/globalFilePresent.ts","/src/project/src/globalMain.ts","/src/project/src/globalNewFile.ts","/src/project/src/main.ts"]
Program options: {"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: SafeModules
Program files::
/lib/lib.d.ts
/src/project/src/filePresent.ts
/src/project/src/anotherFileReusingResolution.ts
/src/project/src/globalFilePresent.ts
/src/project/src/globalFileNotFound.ts
/src/project/src/globalAnotherFileWithSameReferenes.ts
/src/project/src/globalNewFile.ts
/src/project/src/globalMain.ts
/src/project/src/main.ts

Semantic diagnostics in builder refreshed for::
/src/project/src/globalMain.ts


//// [/src/project/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./src/filepresent.ts": {
        "version": "11598859296-export function something() { return 10; }",
        "signature": "-15062742831-export declare function something(): number;\r\n",
        "affectsGlobalScope": false
      },
      "./src/anotherfilereusingresolution.ts": {
        "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      },
      "./src/globalfilepresent.ts": {
        "version": "-5627034801-function globalSomething() { return 10; }",
        "signature": "-6032143744-declare function globalSomething(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalfilenotfound.ts": {
        "version": "-6310824062-function globalSomething2() { return 20; }",
        "signature": "-7753781454-declare function globalSomething2(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalanotherfilewithsamereferenes.ts": {
        "version": "-4448253777-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalAnotherFileWithSameReferenes() { }\n",
        "signature": "-18570932929-/// <reference path=\"globalFilePresent.d.ts\" />\r\n/// <reference path=\"globalFileNotFound.d.ts\" />\r\ndeclare function globalAnotherFileWithSameReferenes(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalnewfile.ts": {
        "version": "4916490342-function globalFoo() { return 20; }",
        "signature": "4157970454-declare function globalFoo(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalmain.ts": {
        "version": "-5021007197-/// <reference path=\"./globalNewFile.ts\"/>\n/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalMain() { }\nglobalSomething();globalFoo();globalSomething();",
        "signature": "3235645566-/// <reference path=\"globalNewFile.d.ts\" />\r\n/// <reference path=\"globalFilePresent.d.ts\" />\r\n/// <reference path=\"globalFileNotFound.d.ts\" />\r\ndeclare function globalMain(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/main.ts": {
        "version": "-9387417376-import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      }
    },
    "options": {
      "module": 2,
      "composite": true,
      "persistResolutions": true,
      "traceResolution": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {
      "./src/anotherfilereusingresolution.ts": [
        "./src/filepresent.ts"
      ],
      "./src/globalanotherfilewithsamereferenes.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts"
      ],
      "./src/globalmain.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts",
        "./src/globalnewfile.ts"
      ],
      "./src/main.ts": [
        "./src/filepresent.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      [
        "./src/anotherfilereusingresolution.ts",
        [
          {
            "file": "./src/anotherfilereusingresolution.ts",
            "start": 70,
            "length": 16,
            "messageText": "Cannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?",
            "category": 1,
            "code": 2792
          }
        ]
      ],
      "./src/filepresent.ts",
      "./src/globalanotherfilewithsamereferenes.ts",
      "./src/globalfilenotfound.ts",
      "./src/globalfilepresent.ts",
      "./src/globalmain.ts",
      "./src/globalnewfile.ts",
      [
        "./src/main.ts",
        [
          {
            "file": "./src/main.ts",
            "start": 127,
            "length": 16,
            "messageText": "Cannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?",
            "category": 1,
            "code": 2792
          }
        ]
      ]
    ],
    "affectedFilesPendingEmit": [
      [
        "./src/anotherfilereusingresolution.ts",
        1
      ],
      [
        "./src/filepresent.ts",
        1
      ],
      [
        "./src/globalanotherfilewithsamereferenes.ts",
        1
      ],
      [
        "./src/globalfilenotfound.ts",
        1
      ],
      [
        "./src/globalfilepresent.ts",
        1
      ],
      [
        "./src/globalmain.ts",
        1
      ],
      [
        "./src/globalnewfile.ts",
        1
      ],
      [
        "./src/main.ts",
        1
      ]
    ],
    "peristedProgram": {
      "files": [
        {
          "fileName": "../../lib/lib.d.ts",
          "originalFileName": "../../lib/lib.d.ts",
          "path": "../../lib/lib.d.ts",
          "resolvedPath": "../../lib/lib.d.ts",
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "flags": 0,
          "hasNoDefaultLib": true,
          "includeReasons": [
            {
              "kind": 6
            }
          ]
        },
        {
          "fileName": "./src/filePresent.ts",
          "originalFileName": "./src/filePresent.ts",
          "path": "./src/filepresent.ts",
          "resolvedPath": "./src/filepresent.ts",
          "version": "11598859296-export function something() { return 10; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 3,
              "file": "./src/anotherfilereusingresolution.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 1
            },
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 0
            },
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 1
            }
          ]
        },
        {
          "fileName": "./src/anotherFileReusingResolution.ts",
          "originalFileName": "./src/anotherFileReusingResolution.ts",
          "path": "./src/anotherfilereusingresolution.ts",
          "resolvedPath": "./src/anotherfilereusingresolution.ts",
          "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
          "flags": 0,
          "imports": [
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./fileNotFound"
            }
          ],
          "resolvedModules": {
            "./filePresent": 0,
            "./fileNotFound": 1
          },
          "includeReasons": [
            {
              "kind": 0,
              "index": 0
            }
          ]
        },
        {
          "fileName": "./src/globalFilePresent.ts",
          "originalFileName": "./src/globalFilePresent.ts",
          "path": "./src/globalfilepresent.ts",
          "resolvedPath": "./src/globalfilepresent.ts",
          "version": "-5627034801-function globalSomething() { return 10; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalanotherfilewithsamereferenes.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 4
            },
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 1
            }
          ]
        },
        {
          "fileName": "./src/globalFileNotFound.ts",
          "originalFileName": "./src/globalFileNotFound.ts",
          "path": "./src/globalfilenotfound.ts",
          "resolvedPath": "./src/globalfilenotfound.ts",
          "version": "-6310824062-function globalSomething2() { return 20; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalanotherfilewithsamereferenes.ts",
              "index": 1
            },
            {
              "kind": 0,
              "index": 3
            },
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 2
            }
          ]
        },
        {
          "fileName": "./src/globalAnotherFileWithSameReferenes.ts",
          "originalFileName": "./src/globalAnotherFileWithSameReferenes.ts",
          "path": "./src/globalanotherfilewithsamereferenes.ts",
          "resolvedPath": "./src/globalanotherfilewithsamereferenes.ts",
          "version": "-4448253777-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalAnotherFileWithSameReferenes() { }\n",
          "flags": 0,
          "referencedFiles": [
            "../../globalFilePresent.ts",
            "../../globalFileNotFound.ts"
          ],
          "includeReasons": [
            {
              "kind": 0,
              "index": 2
            }
          ]
        },
        {
          "fileName": "./src/globalNewFile.ts",
          "originalFileName": "./src/globalNewFile.ts",
          "path": "./src/globalnewfile.ts",
          "resolvedPath": "./src/globalnewfile.ts",
          "version": "4916490342-function globalFoo() { return 20; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 6
            }
          ]
        },
        {
          "fileName": "./src/globalMain.ts",
          "originalFileName": "./src/globalMain.ts",
          "path": "./src/globalmain.ts",
          "resolvedPath": "./src/globalmain.ts",
          "version": "-5021007197-/// <reference path=\"./globalNewFile.ts\"/>\n/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalMain() { }\nglobalSomething();globalFoo();globalSomething();",
          "flags": 0,
          "referencedFiles": [
            "../../globalNewFile.ts",
            "../../globalFilePresent.ts",
            "../../globalFileNotFound.ts"
          ],
          "includeReasons": [
            {
              "kind": 0,
              "index": 5
            }
          ]
        },
        {
          "fileName": "./src/main.ts",
          "originalFileName": "./src/main.ts",
          "path": "./src/main.ts",
          "resolvedPath": "./src/main.ts",
          "version": "-9387417376-import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
          "flags": 0,
          "imports": [
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./fileNotFound"
            }
          ],
          "resolvedModules": {
            "./filePresent": 0,
            "./fileNotFound": 1
          },
          "includeReasons": [
            {
              "kind": 0,
              "index": 7
            }
          ]
        }
      ],
      "rootFileNames": [
        "./src/anotherFileReusingResolution.ts",
        "./src/filePresent.ts",
        "./src/globalAnotherFileWithSameReferenes.ts",
        "./src/globalFileNotFound.ts",
        "./src/globalFilePresent.ts",
        "./src/globalMain.ts",
        "./src/globalNewFile.ts",
        "./src/main.ts"
      ],
      "resolutions": [
        {
          "resolvedModule": {
            "resolvedFileName": "./src/filePresent.ts",
            "extension": ".ts"
          }
        },
        {
          "failedLookupLocations": [
            "./src/fileNotFound.ts",
            "./src/fileNotFound.tsx",
            "./src/fileNotFound.d.ts",
            "./src/fileNotFound.js",
            "./src/fileNotFound.jsx"
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}



Change:: Modify main file
Input::
//// [/src/project/src/main.ts]
import { something } from "./filePresent";
import { something as something1 } from "./filePresent";
import { something2 } from "./fileNotFound";something();



Output::
/lib/tsc --b src/project
Reusing resolution of module './filePresent' from '/src/project/src/main.ts' of old program, it was successfully resolved to '/src/project/src/filePresent.ts'.
Reusing resolution of module './filePresent' from '/src/project/src/main.ts' of old program, it was successfully resolved to '/src/project/src/filePresent.ts'.
Reusing resolution of module './fileNotFound' from '/src/project/src/main.ts' of old program, it was not resolved.
[96msrc/project/src/anotherFileReusingResolution.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m2[0m import { something2 } from "./fileNotFound";
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m

[96msrc/project/src/main.ts[0m:[93m3[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m3[0m import { something2 } from "./fileNotFound";something();
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m


Found 2 errors.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: ["/src/project/src/anotherFileReusingResolution.ts","/src/project/src/filePresent.ts","/src/project/src/globalAnotherFileWithSameReferenes.ts","/src/project/src/globalFileNotFound.ts","/src/project/src/globalFilePresent.ts","/src/project/src/globalMain.ts","/src/project/src/globalNewFile.ts","/src/project/src/main.ts"]
Program options: {"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: Completely
Program files::
/lib/lib.d.ts
/src/project/src/filePresent.ts
/src/project/src/anotherFileReusingResolution.ts
/src/project/src/globalFilePresent.ts
/src/project/src/globalFileNotFound.ts
/src/project/src/globalAnotherFileWithSameReferenes.ts
/src/project/src/globalNewFile.ts
/src/project/src/globalMain.ts
/src/project/src/main.ts

Semantic diagnostics in builder refreshed for::
/src/project/src/main.ts


//// [/src/project/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./src/filepresent.ts": {
        "version": "11598859296-export function something() { return 10; }",
        "signature": "-15062742831-export declare function something(): number;\r\n",
        "affectsGlobalScope": false
      },
      "./src/anotherfilereusingresolution.ts": {
        "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      },
      "./src/globalfilepresent.ts": {
        "version": "-5627034801-function globalSomething() { return 10; }",
        "signature": "-6032143744-declare function globalSomething(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalfilenotfound.ts": {
        "version": "-6310824062-function globalSomething2() { return 20; }",
        "signature": "-7753781454-declare function globalSomething2(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalanotherfilewithsamereferenes.ts": {
        "version": "-4448253777-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalAnotherFileWithSameReferenes() { }\n",
        "signature": "-18570932929-/// <reference path=\"globalFilePresent.d.ts\" />\r\n/// <reference path=\"globalFileNotFound.d.ts\" />\r\ndeclare function globalAnotherFileWithSameReferenes(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalnewfile.ts": {
        "version": "4916490342-function globalFoo() { return 20; }",
        "signature": "4157970454-declare function globalFoo(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalmain.ts": {
        "version": "-5021007197-/// <reference path=\"./globalNewFile.ts\"/>\n/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalMain() { }\nglobalSomething();globalFoo();globalSomething();",
        "signature": "3235645566-/// <reference path=\"globalNewFile.d.ts\" />\r\n/// <reference path=\"globalFilePresent.d.ts\" />\r\n/// <reference path=\"globalFileNotFound.d.ts\" />\r\ndeclare function globalMain(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/main.ts": {
        "version": "-12344353894-import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";something();",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      }
    },
    "options": {
      "module": 2,
      "composite": true,
      "persistResolutions": true,
      "traceResolution": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {
      "./src/anotherfilereusingresolution.ts": [
        "./src/filepresent.ts"
      ],
      "./src/globalanotherfilewithsamereferenes.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts"
      ],
      "./src/globalmain.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts",
        "./src/globalnewfile.ts"
      ],
      "./src/main.ts": [
        "./src/filepresent.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      [
        "./src/anotherfilereusingresolution.ts",
        [
          {
            "file": "./src/anotherfilereusingresolution.ts",
            "start": 70,
            "length": 16,
            "messageText": "Cannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?",
            "category": 1,
            "code": 2792
          }
        ]
      ],
      "./src/filepresent.ts",
      "./src/globalanotherfilewithsamereferenes.ts",
      "./src/globalfilenotfound.ts",
      "./src/globalfilepresent.ts",
      "./src/globalmain.ts",
      "./src/globalnewfile.ts",
      [
        "./src/main.ts",
        [
          {
            "file": "./src/main.ts",
            "start": 127,
            "length": 16,
            "messageText": "Cannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?",
            "category": 1,
            "code": 2792
          }
        ]
      ]
    ],
    "affectedFilesPendingEmit": [
      [
        "./src/anotherfilereusingresolution.ts",
        1
      ],
      [
        "./src/filepresent.ts",
        1
      ],
      [
        "./src/globalanotherfilewithsamereferenes.ts",
        1
      ],
      [
        "./src/globalfilenotfound.ts",
        1
      ],
      [
        "./src/globalfilepresent.ts",
        1
      ],
      [
        "./src/globalmain.ts",
        1
      ],
      [
        "./src/globalnewfile.ts",
        1
      ],
      [
        "./src/main.ts",
        1
      ]
    ],
    "peristedProgram": {
      "files": [
        {
          "fileName": "../../lib/lib.d.ts",
          "originalFileName": "../../lib/lib.d.ts",
          "path": "../../lib/lib.d.ts",
          "resolvedPath": "../../lib/lib.d.ts",
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "flags": 0,
          "hasNoDefaultLib": true,
          "includeReasons": [
            {
              "kind": 6
            }
          ]
        },
        {
          "fileName": "./src/filePresent.ts",
          "originalFileName": "./src/filePresent.ts",
          "path": "./src/filepresent.ts",
          "resolvedPath": "./src/filepresent.ts",
          "version": "11598859296-export function something() { return 10; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 3,
              "file": "./src/anotherfilereusingresolution.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 1
            },
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 0
            },
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 1
            }
          ]
        },
        {
          "fileName": "./src/anotherFileReusingResolution.ts",
          "originalFileName": "./src/anotherFileReusingResolution.ts",
          "path": "./src/anotherfilereusingresolution.ts",
          "resolvedPath": "./src/anotherfilereusingresolution.ts",
          "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
          "flags": 0,
          "imports": [
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./fileNotFound"
            }
          ],
          "resolvedModules": {
            "./filePresent": 0,
            "./fileNotFound": 1
          },
          "includeReasons": [
            {
              "kind": 0,
              "index": 0
            }
          ]
        },
        {
          "fileName": "./src/globalFilePresent.ts",
          "originalFileName": "./src/globalFilePresent.ts",
          "path": "./src/globalfilepresent.ts",
          "resolvedPath": "./src/globalfilepresent.ts",
          "version": "-5627034801-function globalSomething() { return 10; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalanotherfilewithsamereferenes.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 4
            },
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 1
            }
          ]
        },
        {
          "fileName": "./src/globalFileNotFound.ts",
          "originalFileName": "./src/globalFileNotFound.ts",
          "path": "./src/globalfilenotfound.ts",
          "resolvedPath": "./src/globalfilenotfound.ts",
          "version": "-6310824062-function globalSomething2() { return 20; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalanotherfilewithsamereferenes.ts",
              "index": 1
            },
            {
              "kind": 0,
              "index": 3
            },
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 2
            }
          ]
        },
        {
          "fileName": "./src/globalAnotherFileWithSameReferenes.ts",
          "originalFileName": "./src/globalAnotherFileWithSameReferenes.ts",
          "path": "./src/globalanotherfilewithsamereferenes.ts",
          "resolvedPath": "./src/globalanotherfilewithsamereferenes.ts",
          "version": "-4448253777-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalAnotherFileWithSameReferenes() { }\n",
          "flags": 0,
          "referencedFiles": [
            "../../globalFilePresent.ts",
            "../../globalFileNotFound.ts"
          ],
          "includeReasons": [
            {
              "kind": 0,
              "index": 2
            }
          ]
        },
        {
          "fileName": "./src/globalNewFile.ts",
          "originalFileName": "./src/globalNewFile.ts",
          "path": "./src/globalnewfile.ts",
          "resolvedPath": "./src/globalnewfile.ts",
          "version": "4916490342-function globalFoo() { return 20; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 6
            }
          ]
        },
        {
          "fileName": "./src/globalMain.ts",
          "originalFileName": "./src/globalMain.ts",
          "path": "./src/globalmain.ts",
          "resolvedPath": "./src/globalmain.ts",
          "version": "-5021007197-/// <reference path=\"./globalNewFile.ts\"/>\n/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalMain() { }\nglobalSomething();globalFoo();globalSomething();",
          "flags": 0,
          "referencedFiles": [
            "../../globalNewFile.ts",
            "../../globalFilePresent.ts",
            "../../globalFileNotFound.ts"
          ],
          "includeReasons": [
            {
              "kind": 0,
              "index": 5
            }
          ]
        },
        {
          "fileName": "./src/main.ts",
          "originalFileName": "./src/main.ts",
          "path": "./src/main.ts",
          "resolvedPath": "./src/main.ts",
          "version": "-12344353894-import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";something();",
          "flags": 0,
          "imports": [
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./fileNotFound"
            }
          ],
          "resolvedModules": {
            "./filePresent": 0,
            "./fileNotFound": 1
          },
          "includeReasons": [
            {
              "kind": 0,
              "index": 7
            }
          ]
        }
      ],
      "rootFileNames": [
        "./src/anotherFileReusingResolution.ts",
        "./src/filePresent.ts",
        "./src/globalAnotherFileWithSameReferenes.ts",
        "./src/globalFileNotFound.ts",
        "./src/globalFilePresent.ts",
        "./src/globalMain.ts",
        "./src/globalNewFile.ts",
        "./src/main.ts"
      ],
      "resolutions": [
        {
          "resolvedModule": {
            "resolvedFileName": "./src/filePresent.ts",
            "extension": ".ts"
          }
        },
        {
          "failedLookupLocations": [
            "./src/fileNotFound.ts",
            "./src/fileNotFound.tsx",
            "./src/fileNotFound.d.ts",
            "./src/fileNotFound.js",
            "./src/fileNotFound.jsx"
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}



Change:: Add new module and update main file
Input::
//// [/src/project/src/main.ts]
import { foo } from "./newFile";import { something } from "./filePresent";
import { something as something1 } from "./filePresent";
import { something2 } from "./fileNotFound";something();

//// [/src/project/src/newFile.ts]
export function foo() { return 20; }



Output::
/lib/tsc --b src/project
Reusing resolution of module './filePresent' from '/src/project/src/anotherFileReusingResolution.ts' of old program, it was successfully resolved to '/src/project/src/filePresent.ts'.
Reusing resolution of module './fileNotFound' from '/src/project/src/anotherFileReusingResolution.ts' of old program, it was not resolved.
Reusing resolution of module './filePresent' from '/src/project/src/main.ts' of old program, it was successfully resolved to '/src/project/src/filePresent.ts'.
Reusing resolution of module './filePresent' from '/src/project/src/main.ts' of old program, it was successfully resolved to '/src/project/src/filePresent.ts'.
Reusing resolution of module './fileNotFound' from '/src/project/src/main.ts' of old program, it was not resolved.
======== Resolving module './newFile' from '/src/project/src/main.ts'. ========
Module resolution kind is not specified, using 'Classic'.
File '/src/project/src/newFile.ts' exist - use it as a name resolution result.
======== Module name './newFile' was successfully resolved to '/src/project/src/newFile.ts'. ========
[96msrc/project/src/anotherFileReusingResolution.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m2[0m import { something2 } from "./fileNotFound";
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m

[96msrc/project/src/main.ts[0m:[93m3[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m3[0m import { something2 } from "./fileNotFound";something();
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m


Found 2 errors.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: ["/src/project/src/anotherFileReusingResolution.ts","/src/project/src/filePresent.ts","/src/project/src/globalAnotherFileWithSameReferenes.ts","/src/project/src/globalFileNotFound.ts","/src/project/src/globalFilePresent.ts","/src/project/src/globalMain.ts","/src/project/src/globalNewFile.ts","/src/project/src/main.ts","/src/project/src/newFile.ts"]
Program options: {"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: SafeModules
Program files::
/lib/lib.d.ts
/src/project/src/filePresent.ts
/src/project/src/anotherFileReusingResolution.ts
/src/project/src/globalFilePresent.ts
/src/project/src/globalFileNotFound.ts
/src/project/src/globalAnotherFileWithSameReferenes.ts
/src/project/src/globalNewFile.ts
/src/project/src/globalMain.ts
/src/project/src/newFile.ts
/src/project/src/main.ts

Semantic diagnostics in builder refreshed for::
/src/project/src/newFile.ts
/src/project/src/main.ts


//// [/src/project/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./src/filepresent.ts": {
        "version": "11598859296-export function something() { return 10; }",
        "signature": "-15062742831-export declare function something(): number;\r\n",
        "affectsGlobalScope": false
      },
      "./src/anotherfilereusingresolution.ts": {
        "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      },
      "./src/globalfilepresent.ts": {
        "version": "-5627034801-function globalSomething() { return 10; }",
        "signature": "-6032143744-declare function globalSomething(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalfilenotfound.ts": {
        "version": "-6310824062-function globalSomething2() { return 20; }",
        "signature": "-7753781454-declare function globalSomething2(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalanotherfilewithsamereferenes.ts": {
        "version": "-4448253777-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalAnotherFileWithSameReferenes() { }\n",
        "signature": "-18570932929-/// <reference path=\"globalFilePresent.d.ts\" />\r\n/// <reference path=\"globalFileNotFound.d.ts\" />\r\ndeclare function globalAnotherFileWithSameReferenes(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalnewfile.ts": {
        "version": "4916490342-function globalFoo() { return 20; }",
        "signature": "4157970454-declare function globalFoo(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalmain.ts": {
        "version": "-5021007197-/// <reference path=\"./globalNewFile.ts\"/>\n/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalMain() { }\nglobalSomething();globalFoo();globalSomething();",
        "signature": "3235645566-/// <reference path=\"globalNewFile.d.ts\" />\r\n/// <reference path=\"globalFilePresent.d.ts\" />\r\n/// <reference path=\"globalFileNotFound.d.ts\" />\r\ndeclare function globalMain(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/newfile.ts": {
        "version": "4428918903-export function foo() { return 20; }",
        "signature": "-3405156953-export declare function foo(): number;\r\n",
        "affectsGlobalScope": false
      },
      "./src/main.ts": {
        "version": "28260231563-import { foo } from \"./newFile\";import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";something();",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      }
    },
    "options": {
      "module": 2,
      "composite": true,
      "persistResolutions": true,
      "traceResolution": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {
      "./src/anotherfilereusingresolution.ts": [
        "./src/filepresent.ts"
      ],
      "./src/globalanotherfilewithsamereferenes.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts"
      ],
      "./src/globalmain.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts",
        "./src/globalnewfile.ts"
      ],
      "./src/main.ts": [
        "./src/filepresent.ts",
        "./src/newfile.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      [
        "./src/anotherfilereusingresolution.ts",
        [
          {
            "file": "./src/anotherfilereusingresolution.ts",
            "start": 70,
            "length": 16,
            "messageText": "Cannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?",
            "category": 1,
            "code": 2792
          }
        ]
      ],
      "./src/filepresent.ts",
      "./src/globalanotherfilewithsamereferenes.ts",
      "./src/globalfilenotfound.ts",
      "./src/globalfilepresent.ts",
      "./src/globalmain.ts",
      "./src/globalnewfile.ts",
      [
        "./src/main.ts",
        [
          {
            "file": "./src/main.ts",
            "start": 159,
            "length": 16,
            "messageText": "Cannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?",
            "category": 1,
            "code": 2792
          }
        ]
      ],
      "./src/newfile.ts"
    ],
    "affectedFilesPendingEmit": [
      [
        "./src/anotherfilereusingresolution.ts",
        1
      ],
      [
        "./src/filepresent.ts",
        1
      ],
      [
        "./src/globalanotherfilewithsamereferenes.ts",
        1
      ],
      [
        "./src/globalfilenotfound.ts",
        1
      ],
      [
        "./src/globalfilepresent.ts",
        1
      ],
      [
        "./src/globalmain.ts",
        1
      ],
      [
        "./src/globalnewfile.ts",
        1
      ],
      [
        "./src/main.ts",
        1
      ],
      [
        "./src/newfile.ts",
        1
      ]
    ],
    "peristedProgram": {
      "files": [
        {
          "fileName": "../../lib/lib.d.ts",
          "originalFileName": "../../lib/lib.d.ts",
          "path": "../../lib/lib.d.ts",
          "resolvedPath": "../../lib/lib.d.ts",
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "flags": 0,
          "hasNoDefaultLib": true,
          "includeReasons": [
            {
              "kind": 6
            }
          ]
        },
        {
          "fileName": "./src/filePresent.ts",
          "originalFileName": "./src/filePresent.ts",
          "path": "./src/filepresent.ts",
          "resolvedPath": "./src/filepresent.ts",
          "version": "11598859296-export function something() { return 10; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 3,
              "file": "./src/anotherfilereusingresolution.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 1
            },
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 1
            },
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 2
            }
          ]
        },
        {
          "fileName": "./src/anotherFileReusingResolution.ts",
          "originalFileName": "./src/anotherFileReusingResolution.ts",
          "path": "./src/anotherfilereusingresolution.ts",
          "resolvedPath": "./src/anotherfilereusingresolution.ts",
          "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
          "flags": 0,
          "imports": [
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./fileNotFound"
            }
          ],
          "resolvedModules": {
            "./filePresent": 0,
            "./fileNotFound": 1
          },
          "includeReasons": [
            {
              "kind": 0,
              "index": 0
            }
          ]
        },
        {
          "fileName": "./src/globalFilePresent.ts",
          "originalFileName": "./src/globalFilePresent.ts",
          "path": "./src/globalfilepresent.ts",
          "resolvedPath": "./src/globalfilepresent.ts",
          "version": "-5627034801-function globalSomething() { return 10; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalanotherfilewithsamereferenes.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 4
            },
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 1
            }
          ]
        },
        {
          "fileName": "./src/globalFileNotFound.ts",
          "originalFileName": "./src/globalFileNotFound.ts",
          "path": "./src/globalfilenotfound.ts",
          "resolvedPath": "./src/globalfilenotfound.ts",
          "version": "-6310824062-function globalSomething2() { return 20; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalanotherfilewithsamereferenes.ts",
              "index": 1
            },
            {
              "kind": 0,
              "index": 3
            },
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 2
            }
          ]
        },
        {
          "fileName": "./src/globalAnotherFileWithSameReferenes.ts",
          "originalFileName": "./src/globalAnotherFileWithSameReferenes.ts",
          "path": "./src/globalanotherfilewithsamereferenes.ts",
          "resolvedPath": "./src/globalanotherfilewithsamereferenes.ts",
          "version": "-4448253777-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalAnotherFileWithSameReferenes() { }\n",
          "flags": 0,
          "referencedFiles": [
            "../../globalFilePresent.ts",
            "../../globalFileNotFound.ts"
          ],
          "includeReasons": [
            {
              "kind": 0,
              "index": 2
            }
          ]
        },
        {
          "fileName": "./src/globalNewFile.ts",
          "originalFileName": "./src/globalNewFile.ts",
          "path": "./src/globalnewfile.ts",
          "resolvedPath": "./src/globalnewfile.ts",
          "version": "4916490342-function globalFoo() { return 20; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 6
            }
          ]
        },
        {
          "fileName": "./src/globalMain.ts",
          "originalFileName": "./src/globalMain.ts",
          "path": "./src/globalmain.ts",
          "resolvedPath": "./src/globalmain.ts",
          "version": "-5021007197-/// <reference path=\"./globalNewFile.ts\"/>\n/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalMain() { }\nglobalSomething();globalFoo();globalSomething();",
          "flags": 0,
          "referencedFiles": [
            "../../globalNewFile.ts",
            "../../globalFilePresent.ts",
            "../../globalFileNotFound.ts"
          ],
          "includeReasons": [
            {
              "kind": 0,
              "index": 5
            }
          ]
        },
        {
          "fileName": "./src/newFile.ts",
          "originalFileName": "./src/newFile.ts",
          "path": "./src/newfile.ts",
          "resolvedPath": "./src/newfile.ts",
          "version": "4428918903-export function foo() { return 20; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 8
            }
          ]
        },
        {
          "fileName": "./src/main.ts",
          "originalFileName": "./src/main.ts",
          "path": "./src/main.ts",
          "resolvedPath": "./src/main.ts",
          "version": "28260231563-import { foo } from \"./newFile\";import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";something();",
          "flags": 0,
          "imports": [
            {
              "kind": 10,
              "text": "./newFile"
            },
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./fileNotFound"
            }
          ],
          "resolvedModules": {
            "./newFile": 2,
            "./filePresent": 0,
            "./fileNotFound": 1
          },
          "includeReasons": [
            {
              "kind": 0,
              "index": 7
            }
          ]
        }
      ],
      "rootFileNames": [
        "./src/anotherFileReusingResolution.ts",
        "./src/filePresent.ts",
        "./src/globalAnotherFileWithSameReferenes.ts",
        "./src/globalFileNotFound.ts",
        "./src/globalFilePresent.ts",
        "./src/globalMain.ts",
        "./src/globalNewFile.ts",
        "./src/main.ts",
        "./src/newFile.ts"
      ],
      "resolutions": [
        {
          "resolvedModule": {
            "resolvedFileName": "./src/filePresent.ts",
            "extension": ".ts"
          }
        },
        {
          "failedLookupLocations": [
            "./src/fileNotFound.ts",
            "./src/fileNotFound.tsx",
            "./src/fileNotFound.d.ts",
            "./src/fileNotFound.js",
            "./src/fileNotFound.jsx"
          ]
        },
        {
          "resolvedModule": {
            "resolvedFileName": "./src/newFile.ts",
            "extension": ".ts"
          }
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}



Change:: Write file that could not be resolved
Input::
//// [/src/project/src/fileNotFound.ts]
export function something2() { return 20; }



Output::
/lib/tsc --b src/project
Reusing resolution of module './filePresent' from '/src/project/src/anotherFileReusingResolution.ts' of old program, it was successfully resolved to '/src/project/src/filePresent.ts'.
Reusing resolution of module './fileNotFound' from '/src/project/src/anotherFileReusingResolution.ts' of old program, it was not resolved.
Reusing resolution of module './newFile' from '/src/project/src/main.ts' of old program, it was successfully resolved to '/src/project/src/newFile.ts'.
Reusing resolution of module './filePresent' from '/src/project/src/main.ts' of old program, it was successfully resolved to '/src/project/src/filePresent.ts'.
Reusing resolution of module './filePresent' from '/src/project/src/main.ts' of old program, it was successfully resolved to '/src/project/src/filePresent.ts'.
Reusing resolution of module './fileNotFound' from '/src/project/src/main.ts' of old program, it was not resolved.
[96msrc/project/src/anotherFileReusingResolution.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m2[0m import { something2 } from "./fileNotFound";
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m

[96msrc/project/src/main.ts[0m:[93m3[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m3[0m import { something2 } from "./fileNotFound";something();
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m


Found 2 errors.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: ["/src/project/src/anotherFileReusingResolution.ts","/src/project/src/fileNotFound.ts","/src/project/src/filePresent.ts","/src/project/src/globalAnotherFileWithSameReferenes.ts","/src/project/src/globalFileNotFound.ts","/src/project/src/globalFilePresent.ts","/src/project/src/globalMain.ts","/src/project/src/globalNewFile.ts","/src/project/src/main.ts","/src/project/src/newFile.ts"]
Program options: {"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: SafeModules
Program files::
/lib/lib.d.ts
/src/project/src/filePresent.ts
/src/project/src/anotherFileReusingResolution.ts
/src/project/src/fileNotFound.ts
/src/project/src/globalFilePresent.ts
/src/project/src/globalFileNotFound.ts
/src/project/src/globalAnotherFileWithSameReferenes.ts
/src/project/src/globalNewFile.ts
/src/project/src/globalMain.ts
/src/project/src/newFile.ts
/src/project/src/main.ts

Semantic diagnostics in builder refreshed for::
/src/project/src/fileNotFound.ts


//// [/src/project/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./src/filepresent.ts": {
        "version": "11598859296-export function something() { return 10; }",
        "signature": "-15062742831-export declare function something(): number;\r\n",
        "affectsGlobalScope": false
      },
      "./src/anotherfilereusingresolution.ts": {
        "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      },
      "./src/filenotfound.ts": {
        "version": "-497034637-export function something2() { return 20; }",
        "signature": "-13705775197-export declare function something2(): number;\r\n",
        "affectsGlobalScope": false
      },
      "./src/globalfilepresent.ts": {
        "version": "-5627034801-function globalSomething() { return 10; }",
        "signature": "-6032143744-declare function globalSomething(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalfilenotfound.ts": {
        "version": "-6310824062-function globalSomething2() { return 20; }",
        "signature": "-7753781454-declare function globalSomething2(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalanotherfilewithsamereferenes.ts": {
        "version": "-4448253777-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalAnotherFileWithSameReferenes() { }\n",
        "signature": "-18570932929-/// <reference path=\"globalFilePresent.d.ts\" />\r\n/// <reference path=\"globalFileNotFound.d.ts\" />\r\ndeclare function globalAnotherFileWithSameReferenes(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalnewfile.ts": {
        "version": "4916490342-function globalFoo() { return 20; }",
        "signature": "4157970454-declare function globalFoo(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalmain.ts": {
        "version": "-5021007197-/// <reference path=\"./globalNewFile.ts\"/>\n/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalMain() { }\nglobalSomething();globalFoo();globalSomething();",
        "signature": "3235645566-/// <reference path=\"globalNewFile.d.ts\" />\r\n/// <reference path=\"globalFilePresent.d.ts\" />\r\n/// <reference path=\"globalFileNotFound.d.ts\" />\r\ndeclare function globalMain(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/newfile.ts": {
        "version": "4428918903-export function foo() { return 20; }",
        "signature": "-3405156953-export declare function foo(): number;\r\n",
        "affectsGlobalScope": false
      },
      "./src/main.ts": {
        "version": "28260231563-import { foo } from \"./newFile\";import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";something();",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      }
    },
    "options": {
      "module": 2,
      "composite": true,
      "persistResolutions": true,
      "traceResolution": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {
      "./src/anotherfilereusingresolution.ts": [
        "./src/filepresent.ts"
      ],
      "./src/globalanotherfilewithsamereferenes.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts"
      ],
      "./src/globalmain.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts",
        "./src/globalnewfile.ts"
      ],
      "./src/main.ts": [
        "./src/filepresent.ts",
        "./src/newfile.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      [
        "./src/anotherfilereusingresolution.ts",
        [
          {
            "file": "./src/anotherfilereusingresolution.ts",
            "start": 70,
            "length": 16,
            "messageText": "Cannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?",
            "category": 1,
            "code": 2792
          }
        ]
      ],
      "./src/filenotfound.ts",
      "./src/filepresent.ts",
      "./src/globalanotherfilewithsamereferenes.ts",
      "./src/globalfilenotfound.ts",
      "./src/globalfilepresent.ts",
      "./src/globalmain.ts",
      "./src/globalnewfile.ts",
      [
        "./src/main.ts",
        [
          {
            "file": "./src/main.ts",
            "start": 159,
            "length": 16,
            "messageText": "Cannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?",
            "category": 1,
            "code": 2792
          }
        ]
      ],
      "./src/newfile.ts"
    ],
    "affectedFilesPendingEmit": [
      [
        "./src/anotherfilereusingresolution.ts",
        1
      ],
      [
        "./src/filenotfound.ts",
        1
      ],
      [
        "./src/filepresent.ts",
        1
      ],
      [
        "./src/globalanotherfilewithsamereferenes.ts",
        1
      ],
      [
        "./src/globalfilenotfound.ts",
        1
      ],
      [
        "./src/globalfilepresent.ts",
        1
      ],
      [
        "./src/globalmain.ts",
        1
      ],
      [
        "./src/globalnewfile.ts",
        1
      ],
      [
        "./src/main.ts",
        1
      ],
      [
        "./src/newfile.ts",
        1
      ]
    ],
    "peristedProgram": {
      "files": [
        {
          "fileName": "../../lib/lib.d.ts",
          "originalFileName": "../../lib/lib.d.ts",
          "path": "../../lib/lib.d.ts",
          "resolvedPath": "../../lib/lib.d.ts",
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "flags": 0,
          "hasNoDefaultLib": true,
          "includeReasons": [
            {
              "kind": 6
            }
          ]
        },
        {
          "fileName": "./src/filePresent.ts",
          "originalFileName": "./src/filePresent.ts",
          "path": "./src/filepresent.ts",
          "resolvedPath": "./src/filepresent.ts",
          "version": "11598859296-export function something() { return 10; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 3,
              "file": "./src/anotherfilereusingresolution.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 2
            },
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 1
            },
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 2
            }
          ]
        },
        {
          "fileName": "./src/anotherFileReusingResolution.ts",
          "originalFileName": "./src/anotherFileReusingResolution.ts",
          "path": "./src/anotherfilereusingresolution.ts",
          "resolvedPath": "./src/anotherfilereusingresolution.ts",
          "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
          "flags": 0,
          "imports": [
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./fileNotFound"
            }
          ],
          "resolvedModules": {
            "./filePresent": 0,
            "./fileNotFound": 1
          },
          "includeReasons": [
            {
              "kind": 0,
              "index": 0
            }
          ]
        },
        {
          "fileName": "./src/fileNotFound.ts",
          "originalFileName": "./src/fileNotFound.ts",
          "path": "./src/filenotfound.ts",
          "resolvedPath": "./src/filenotfound.ts",
          "version": "-497034637-export function something2() { return 20; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 0,
              "index": 1
            }
          ]
        },
        {
          "fileName": "./src/globalFilePresent.ts",
          "originalFileName": "./src/globalFilePresent.ts",
          "path": "./src/globalfilepresent.ts",
          "resolvedPath": "./src/globalfilepresent.ts",
          "version": "-5627034801-function globalSomething() { return 10; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalanotherfilewithsamereferenes.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 5
            },
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 1
            }
          ]
        },
        {
          "fileName": "./src/globalFileNotFound.ts",
          "originalFileName": "./src/globalFileNotFound.ts",
          "path": "./src/globalfilenotfound.ts",
          "resolvedPath": "./src/globalfilenotfound.ts",
          "version": "-6310824062-function globalSomething2() { return 20; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalanotherfilewithsamereferenes.ts",
              "index": 1
            },
            {
              "kind": 0,
              "index": 4
            },
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 2
            }
          ]
        },
        {
          "fileName": "./src/globalAnotherFileWithSameReferenes.ts",
          "originalFileName": "./src/globalAnotherFileWithSameReferenes.ts",
          "path": "./src/globalanotherfilewithsamereferenes.ts",
          "resolvedPath": "./src/globalanotherfilewithsamereferenes.ts",
          "version": "-4448253777-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalAnotherFileWithSameReferenes() { }\n",
          "flags": 0,
          "referencedFiles": [
            "../../globalFilePresent.ts",
            "../../globalFileNotFound.ts"
          ],
          "includeReasons": [
            {
              "kind": 0,
              "index": 3
            }
          ]
        },
        {
          "fileName": "./src/globalNewFile.ts",
          "originalFileName": "./src/globalNewFile.ts",
          "path": "./src/globalnewfile.ts",
          "resolvedPath": "./src/globalnewfile.ts",
          "version": "4916490342-function globalFoo() { return 20; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 7
            }
          ]
        },
        {
          "fileName": "./src/globalMain.ts",
          "originalFileName": "./src/globalMain.ts",
          "path": "./src/globalmain.ts",
          "resolvedPath": "./src/globalmain.ts",
          "version": "-5021007197-/// <reference path=\"./globalNewFile.ts\"/>\n/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalMain() { }\nglobalSomething();globalFoo();globalSomething();",
          "flags": 0,
          "referencedFiles": [
            "../../globalNewFile.ts",
            "../../globalFilePresent.ts",
            "../../globalFileNotFound.ts"
          ],
          "includeReasons": [
            {
              "kind": 0,
              "index": 6
            }
          ]
        },
        {
          "fileName": "./src/newFile.ts",
          "originalFileName": "./src/newFile.ts",
          "path": "./src/newfile.ts",
          "resolvedPath": "./src/newfile.ts",
          "version": "4428918903-export function foo() { return 20; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 9
            }
          ]
        },
        {
          "fileName": "./src/main.ts",
          "originalFileName": "./src/main.ts",
          "path": "./src/main.ts",
          "resolvedPath": "./src/main.ts",
          "version": "28260231563-import { foo } from \"./newFile\";import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";something();",
          "flags": 0,
          "imports": [
            {
              "kind": 10,
              "text": "./newFile"
            },
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./fileNotFound"
            }
          ],
          "resolvedModules": {
            "./newFile": 2,
            "./filePresent": 0,
            "./fileNotFound": 1
          },
          "includeReasons": [
            {
              "kind": 0,
              "index": 8
            }
          ]
        }
      ],
      "rootFileNames": [
        "./src/anotherFileReusingResolution.ts",
        "./src/fileNotFound.ts",
        "./src/filePresent.ts",
        "./src/globalAnotherFileWithSameReferenes.ts",
        "./src/globalFileNotFound.ts",
        "./src/globalFilePresent.ts",
        "./src/globalMain.ts",
        "./src/globalNewFile.ts",
        "./src/main.ts",
        "./src/newFile.ts"
      ],
      "resolutions": [
        {
          "resolvedModule": {
            "resolvedFileName": "./src/filePresent.ts",
            "extension": ".ts"
          }
        },
        {
          "failedLookupLocations": [
            "./src/fileNotFound.ts",
            "./src/fileNotFound.tsx",
            "./src/fileNotFound.d.ts",
            "./src/fileNotFound.js",
            "./src/fileNotFound.jsx"
          ]
        },
        {
          "resolvedModule": {
            "resolvedFileName": "./src/newFile.ts",
            "extension": ".ts"
          }
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}



Change:: Clean resolutions
Input::


Output::
/lib/tsc --b src/project --cleanPersistedProgram
exitCode:: ExitStatus.Success


//// [/src/project/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./src/filepresent.ts": {
        "version": "11598859296-export function something() { return 10; }",
        "signature": "-15062742831-export declare function something(): number;\r\n",
        "affectsGlobalScope": false
      },
      "./src/anotherfilereusingresolution.ts": {
        "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      },
      "./src/filenotfound.ts": {
        "version": "-497034637-export function something2() { return 20; }",
        "signature": "-13705775197-export declare function something2(): number;\r\n",
        "affectsGlobalScope": false
      },
      "./src/globalfilepresent.ts": {
        "version": "-5627034801-function globalSomething() { return 10; }",
        "signature": "-6032143744-declare function globalSomething(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalfilenotfound.ts": {
        "version": "-6310824062-function globalSomething2() { return 20; }",
        "signature": "-7753781454-declare function globalSomething2(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalanotherfilewithsamereferenes.ts": {
        "version": "-4448253777-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalAnotherFileWithSameReferenes() { }\n",
        "signature": "-18570932929-/// <reference path=\"globalFilePresent.d.ts\" />\r\n/// <reference path=\"globalFileNotFound.d.ts\" />\r\ndeclare function globalAnotherFileWithSameReferenes(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalnewfile.ts": {
        "version": "4916490342-function globalFoo() { return 20; }",
        "signature": "4157970454-declare function globalFoo(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalmain.ts": {
        "version": "-5021007197-/// <reference path=\"./globalNewFile.ts\"/>\n/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalMain() { }\nglobalSomething();globalFoo();globalSomething();",
        "signature": "3235645566-/// <reference path=\"globalNewFile.d.ts\" />\r\n/// <reference path=\"globalFilePresent.d.ts\" />\r\n/// <reference path=\"globalFileNotFound.d.ts\" />\r\ndeclare function globalMain(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/newfile.ts": {
        "version": "4428918903-export function foo() { return 20; }",
        "signature": "-3405156953-export declare function foo(): number;\r\n",
        "affectsGlobalScope": false
      },
      "./src/main.ts": {
        "version": "28260231563-import { foo } from \"./newFile\";import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";something();",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      }
    },
    "options": {
      "module": 2,
      "composite": true,
      "persistResolutions": true,
      "traceResolution": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {
      "./src/anotherfilereusingresolution.ts": [
        "./src/filepresent.ts"
      ],
      "./src/globalanotherfilewithsamereferenes.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts"
      ],
      "./src/globalmain.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts",
        "./src/globalnewfile.ts"
      ],
      "./src/main.ts": [
        "./src/filepresent.ts",
        "./src/newfile.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      [
        "./src/anotherfilereusingresolution.ts",
        [
          {
            "file": "./src/anotherfilereusingresolution.ts",
            "start": 70,
            "length": 16,
            "messageText": "Cannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?",
            "category": 1,
            "code": 2792
          }
        ]
      ],
      "./src/filenotfound.ts",
      "./src/filepresent.ts",
      "./src/globalanotherfilewithsamereferenes.ts",
      "./src/globalfilenotfound.ts",
      "./src/globalfilepresent.ts",
      "./src/globalmain.ts",
      "./src/globalnewfile.ts",
      [
        "./src/main.ts",
        [
          {
            "file": "./src/main.ts",
            "start": 159,
            "length": 16,
            "messageText": "Cannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?",
            "category": 1,
            "code": 2792
          }
        ]
      ],
      "./src/newfile.ts"
    ],
    "affectedFilesPendingEmit": [
      [
        "./src/anotherfilereusingresolution.ts",
        1
      ],
      [
        "./src/filenotfound.ts",
        1
      ],
      [
        "./src/filepresent.ts",
        1
      ],
      [
        "./src/globalanotherfilewithsamereferenes.ts",
        1
      ],
      [
        "./src/globalfilenotfound.ts",
        1
      ],
      [
        "./src/globalfilepresent.ts",
        1
      ],
      [
        "./src/globalmain.ts",
        1
      ],
      [
        "./src/globalnewfile.ts",
        1
      ],
      [
        "./src/main.ts",
        1
      ],
      [
        "./src/newfile.ts",
        1
      ]
    ]
  },
  "version": "FakeTSVersion"
}



Change:: Clean resolutions again
Input::


Output::
/lib/tsc --b src/project --cleanPersistedProgram
exitCode:: ExitStatus.Success




Change:: no-change-run
Input::


Output::
/lib/tsc --b src/project
======== Resolving module './filePresent' from '/src/project/src/anotherFileReusingResolution.ts'. ========
Module resolution kind is not specified, using 'Classic'.
File '/src/project/src/filePresent.ts' exist - use it as a name resolution result.
======== Module name './filePresent' was successfully resolved to '/src/project/src/filePresent.ts'. ========
======== Resolving module './fileNotFound' from '/src/project/src/anotherFileReusingResolution.ts'. ========
Module resolution kind is not specified, using 'Classic'.
File '/src/project/src/fileNotFound.ts' exist - use it as a name resolution result.
======== Module name './fileNotFound' was successfully resolved to '/src/project/src/fileNotFound.ts'. ========
======== Resolving module './newFile' from '/src/project/src/main.ts'. ========
Module resolution kind is not specified, using 'Classic'.
File '/src/project/src/newFile.ts' exist - use it as a name resolution result.
======== Module name './newFile' was successfully resolved to '/src/project/src/newFile.ts'. ========
======== Resolving module './filePresent' from '/src/project/src/main.ts'. ========
Resolution for module './filePresent' was found in cache from location '/src/project/src'.
======== Module name './filePresent' was successfully resolved to '/src/project/src/filePresent.ts'. ========
======== Resolving module './fileNotFound' from '/src/project/src/main.ts'. ========
Resolution for module './fileNotFound' was found in cache from location '/src/project/src'.
======== Module name './fileNotFound' was successfully resolved to '/src/project/src/fileNotFound.ts'. ========
exitCode:: ExitStatus.Success
Program root files: ["/src/project/src/anotherFileReusingResolution.ts","/src/project/src/fileNotFound.ts","/src/project/src/filePresent.ts","/src/project/src/globalAnotherFileWithSameReferenes.ts","/src/project/src/globalFileNotFound.ts","/src/project/src/globalFilePresent.ts","/src/project/src/globalMain.ts","/src/project/src/globalNewFile.ts","/src/project/src/main.ts","/src/project/src/newFile.ts"]
Program options: {"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project/src/filePresent.ts
/src/project/src/fileNotFound.ts
/src/project/src/anotherFileReusingResolution.ts
/src/project/src/globalFilePresent.ts
/src/project/src/globalFileNotFound.ts
/src/project/src/globalAnotherFileWithSameReferenes.ts
/src/project/src/globalNewFile.ts
/src/project/src/globalMain.ts
/src/project/src/newFile.ts
/src/project/src/main.ts

Semantic diagnostics in builder refreshed for::
/src/project/src/anotherFileReusingResolution.ts
/src/project/src/main.ts


//// [/src/project/src/anotherFileReusingResolution.d.ts]
export {};


//// [/src/project/src/anotherFileReusingResolution.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});


//// [/src/project/src/fileNotFound.d.ts]
export declare function something2(): number;


//// [/src/project/src/fileNotFound.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.something2 = void 0;
    function something2() { return 20; }
    exports.something2 = something2;
});


//// [/src/project/src/filePresent.d.ts]
export declare function something(): number;


//// [/src/project/src/filePresent.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.something = void 0;
    function something() { return 10; }
    exports.something = something;
});


//// [/src/project/src/globalAnotherFileWithSameReferenes.d.ts]
/// <reference path="globalFilePresent.d.ts" />
/// <reference path="globalFileNotFound.d.ts" />
declare function globalAnotherFileWithSameReferenes(): void;


//// [/src/project/src/globalAnotherFileWithSameReferenes.js]
/// <reference path="./globalFilePresent.ts"/>
/// <reference path="./globalFileNotFound.ts"/>
function globalAnotherFileWithSameReferenes() { }


//// [/src/project/src/globalFileNotFound.d.ts]
declare function globalSomething2(): number;


//// [/src/project/src/globalFileNotFound.js]
function globalSomething2() { return 20; }


//// [/src/project/src/globalFilePresent.d.ts]
declare function globalSomething(): number;


//// [/src/project/src/globalFilePresent.js]
function globalSomething() { return 10; }


//// [/src/project/src/globalMain.d.ts]
/// <reference path="globalNewFile.d.ts" />
/// <reference path="globalFilePresent.d.ts" />
/// <reference path="globalFileNotFound.d.ts" />
declare function globalMain(): void;


//// [/src/project/src/globalMain.js]
/// <reference path="./globalNewFile.ts"/>
/// <reference path="./globalFilePresent.ts"/>
/// <reference path="./globalFileNotFound.ts"/>
function globalMain() { }
globalSomething();
globalFoo();
globalSomething();


//// [/src/project/src/globalNewFile.d.ts]
declare function globalFoo(): number;


//// [/src/project/src/globalNewFile.js]
function globalFoo() { return 20; }


//// [/src/project/src/main.d.ts]
export {};


//// [/src/project/src/main.js]
define(["require", "exports", "./filePresent"], function (require, exports, filePresent_1) {
    "use strict";
    exports.__esModule = true;
    (0, filePresent_1.something)();
});


//// [/src/project/src/newFile.d.ts]
export declare function foo(): number;


//// [/src/project/src/newFile.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.foo = void 0;
    function foo() { return 20; }
    exports.foo = foo;
});


//// [/src/project/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./src/filepresent.ts": {
        "version": "11598859296-export function something() { return 10; }",
        "signature": "-15062742831-export declare function something(): number;\r\n",
        "affectsGlobalScope": false
      },
      "./src/filenotfound.ts": {
        "version": "-497034637-export function something2() { return 20; }",
        "signature": "-13705775197-export declare function something2(): number;\r\n",
        "affectsGlobalScope": false
      },
      "./src/anotherfilereusingresolution.ts": {
        "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      },
      "./src/globalfilepresent.ts": {
        "version": "-5627034801-function globalSomething() { return 10; }",
        "signature": "-6032143744-declare function globalSomething(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalfilenotfound.ts": {
        "version": "-6310824062-function globalSomething2() { return 20; }",
        "signature": "-7753781454-declare function globalSomething2(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalanotherfilewithsamereferenes.ts": {
        "version": "-4448253777-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalAnotherFileWithSameReferenes() { }\n",
        "signature": "-18570932929-/// <reference path=\"globalFilePresent.d.ts\" />\r\n/// <reference path=\"globalFileNotFound.d.ts\" />\r\ndeclare function globalAnotherFileWithSameReferenes(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalnewfile.ts": {
        "version": "4916490342-function globalFoo() { return 20; }",
        "signature": "4157970454-declare function globalFoo(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalmain.ts": {
        "version": "-5021007197-/// <reference path=\"./globalNewFile.ts\"/>\n/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalMain() { }\nglobalSomething();globalFoo();globalSomething();",
        "signature": "3235645566-/// <reference path=\"globalNewFile.d.ts\" />\r\n/// <reference path=\"globalFilePresent.d.ts\" />\r\n/// <reference path=\"globalFileNotFound.d.ts\" />\r\ndeclare function globalMain(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/newfile.ts": {
        "version": "4428918903-export function foo() { return 20; }",
        "signature": "-3405156953-export declare function foo(): number;\r\n",
        "affectsGlobalScope": false
      },
      "./src/main.ts": {
        "version": "28260231563-import { foo } from \"./newFile\";import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";something();",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      }
    },
    "options": {
      "module": 2,
      "composite": true,
      "persistResolutions": true,
      "traceResolution": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {
      "./src/anotherfilereusingresolution.ts": [
        "./src/filenotfound.ts",
        "./src/filepresent.ts"
      ],
      "./src/globalanotherfilewithsamereferenes.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts"
      ],
      "./src/globalmain.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts",
        "./src/globalnewfile.ts"
      ],
      "./src/main.ts": [
        "./src/filenotfound.ts",
        "./src/filepresent.ts",
        "./src/newfile.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./src/anotherfilereusingresolution.ts",
      "./src/filenotfound.ts",
      "./src/filepresent.ts",
      "./src/globalanotherfilewithsamereferenes.ts",
      "./src/globalfilenotfound.ts",
      "./src/globalfilepresent.ts",
      "./src/globalmain.ts",
      "./src/globalnewfile.ts",
      "./src/main.ts",
      "./src/newfile.ts"
    ],
    "peristedProgram": {
      "files": [
        {
          "fileName": "../../lib/lib.d.ts",
          "originalFileName": "../../lib/lib.d.ts",
          "path": "../../lib/lib.d.ts",
          "resolvedPath": "../../lib/lib.d.ts",
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "flags": 0,
          "hasNoDefaultLib": true,
          "includeReasons": [
            {
              "kind": 6
            }
          ]
        },
        {
          "fileName": "./src/filePresent.ts",
          "originalFileName": "./src/filePresent.ts",
          "path": "./src/filepresent.ts",
          "resolvedPath": "./src/filepresent.ts",
          "version": "11598859296-export function something() { return 10; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 3,
              "file": "./src/anotherfilereusingresolution.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 2
            },
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 1
            },
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 2
            }
          ]
        },
        {
          "fileName": "./src/fileNotFound.ts",
          "originalFileName": "./src/fileNotFound.ts",
          "path": "./src/filenotfound.ts",
          "resolvedPath": "./src/filenotfound.ts",
          "version": "-497034637-export function something2() { return 20; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 3,
              "file": "./src/anotherfilereusingresolution.ts",
              "index": 1
            },
            {
              "kind": 0,
              "index": 1
            },
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 3
            }
          ]
        },
        {
          "fileName": "./src/anotherFileReusingResolution.ts",
          "originalFileName": "./src/anotherFileReusingResolution.ts",
          "path": "./src/anotherfilereusingresolution.ts",
          "resolvedPath": "./src/anotherfilereusingresolution.ts",
          "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
          "flags": 0,
          "imports": [
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./fileNotFound"
            }
          ],
          "resolvedModules": {
            "./filePresent": 0,
            "./fileNotFound": 1
          },
          "includeReasons": [
            {
              "kind": 0,
              "index": 0
            }
          ]
        },
        {
          "fileName": "./src/globalFilePresent.ts",
          "originalFileName": "./src/globalFilePresent.ts",
          "path": "./src/globalfilepresent.ts",
          "resolvedPath": "./src/globalfilepresent.ts",
          "version": "-5627034801-function globalSomething() { return 10; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalanotherfilewithsamereferenes.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 5
            },
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 1
            }
          ]
        },
        {
          "fileName": "./src/globalFileNotFound.ts",
          "originalFileName": "./src/globalFileNotFound.ts",
          "path": "./src/globalfilenotfound.ts",
          "resolvedPath": "./src/globalfilenotfound.ts",
          "version": "-6310824062-function globalSomething2() { return 20; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalanotherfilewithsamereferenes.ts",
              "index": 1
            },
            {
              "kind": 0,
              "index": 4
            },
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 2
            }
          ]
        },
        {
          "fileName": "./src/globalAnotherFileWithSameReferenes.ts",
          "originalFileName": "./src/globalAnotherFileWithSameReferenes.ts",
          "path": "./src/globalanotherfilewithsamereferenes.ts",
          "resolvedPath": "./src/globalanotherfilewithsamereferenes.ts",
          "version": "-4448253777-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalAnotherFileWithSameReferenes() { }\n",
          "flags": 0,
          "referencedFiles": [
            "../../globalFilePresent.ts",
            "../../globalFileNotFound.ts"
          ],
          "includeReasons": [
            {
              "kind": 0,
              "index": 3
            }
          ]
        },
        {
          "fileName": "./src/globalNewFile.ts",
          "originalFileName": "./src/globalNewFile.ts",
          "path": "./src/globalnewfile.ts",
          "resolvedPath": "./src/globalnewfile.ts",
          "version": "4916490342-function globalFoo() { return 20; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 7
            }
          ]
        },
        {
          "fileName": "./src/globalMain.ts",
          "originalFileName": "./src/globalMain.ts",
          "path": "./src/globalmain.ts",
          "resolvedPath": "./src/globalmain.ts",
          "version": "-5021007197-/// <reference path=\"./globalNewFile.ts\"/>\n/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalMain() { }\nglobalSomething();globalFoo();globalSomething();",
          "flags": 0,
          "referencedFiles": [
            "../../globalNewFile.ts",
            "../../globalFilePresent.ts",
            "../../globalFileNotFound.ts"
          ],
          "includeReasons": [
            {
              "kind": 0,
              "index": 6
            }
          ]
        },
        {
          "fileName": "./src/newFile.ts",
          "originalFileName": "./src/newFile.ts",
          "path": "./src/newfile.ts",
          "resolvedPath": "./src/newfile.ts",
          "version": "4428918903-export function foo() { return 20; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 9
            }
          ]
        },
        {
          "fileName": "./src/main.ts",
          "originalFileName": "./src/main.ts",
          "path": "./src/main.ts",
          "resolvedPath": "./src/main.ts",
          "version": "28260231563-import { foo } from \"./newFile\";import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";something();",
          "flags": 0,
          "imports": [
            {
              "kind": 10,
              "text": "./newFile"
            },
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./fileNotFound"
            }
          ],
          "resolvedModules": {
            "./newFile": 2,
            "./filePresent": 0,
            "./fileNotFound": 1
          },
          "includeReasons": [
            {
              "kind": 0,
              "index": 8
            }
          ]
        }
      ],
      "rootFileNames": [
        "./src/anotherFileReusingResolution.ts",
        "./src/fileNotFound.ts",
        "./src/filePresent.ts",
        "./src/globalAnotherFileWithSameReferenes.ts",
        "./src/globalFileNotFound.ts",
        "./src/globalFilePresent.ts",
        "./src/globalMain.ts",
        "./src/globalNewFile.ts",
        "./src/main.ts",
        "./src/newFile.ts"
      ],
      "resolutions": [
        {
          "resolvedModule": {
            "resolvedFileName": "./src/filePresent.ts",
            "extension": ".ts"
          }
        },
        {
          "resolvedModule": {
            "resolvedFileName": "./src/fileNotFound.ts",
            "extension": ".ts"
          }
        },
        {
          "resolvedModule": {
            "resolvedFileName": "./src/newFile.ts",
            "extension": ".ts"
          }
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}



Change:: Modify main file
Input::
//// [/src/project/src/main.ts]
import { foo } from "./newFile";import { something } from "./filePresent";
import { something as something1 } from "./filePresent";
import { something2 } from "./fileNotFound";something();something();



Output::
/lib/tsc --b src/project
Reusing resolution of module './newFile' from '/src/project/src/main.ts' of old program, it was successfully resolved to '/src/project/src/newFile.ts'.
Reusing resolution of module './filePresent' from '/src/project/src/main.ts' of old program, it was successfully resolved to '/src/project/src/filePresent.ts'.
Reusing resolution of module './filePresent' from '/src/project/src/main.ts' of old program, it was successfully resolved to '/src/project/src/filePresent.ts'.
Reusing resolution of module './fileNotFound' from '/src/project/src/main.ts' of old program, it was successfully resolved to '/src/project/src/fileNotFound.ts'.
exitCode:: ExitStatus.Success
Program root files: ["/src/project/src/anotherFileReusingResolution.ts","/src/project/src/fileNotFound.ts","/src/project/src/filePresent.ts","/src/project/src/globalAnotherFileWithSameReferenes.ts","/src/project/src/globalFileNotFound.ts","/src/project/src/globalFilePresent.ts","/src/project/src/globalMain.ts","/src/project/src/globalNewFile.ts","/src/project/src/main.ts","/src/project/src/newFile.ts"]
Program options: {"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: Completely
Program files::
/lib/lib.d.ts
/src/project/src/filePresent.ts
/src/project/src/fileNotFound.ts
/src/project/src/anotherFileReusingResolution.ts
/src/project/src/globalFilePresent.ts
/src/project/src/globalFileNotFound.ts
/src/project/src/globalAnotherFileWithSameReferenes.ts
/src/project/src/globalNewFile.ts
/src/project/src/globalMain.ts
/src/project/src/newFile.ts
/src/project/src/main.ts

Semantic diagnostics in builder refreshed for::
/src/project/src/main.ts


//// [/src/project/src/main.d.ts] file written with same contents
//// [/src/project/src/main.js]
define(["require", "exports", "./filePresent"], function (require, exports, filePresent_1) {
    "use strict";
    exports.__esModule = true;
    (0, filePresent_1.something)();
    (0, filePresent_1.something)();
});


//// [/src/project/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./src/filepresent.ts": {
        "version": "11598859296-export function something() { return 10; }",
        "signature": "-15062742831-export declare function something(): number;\r\n",
        "affectsGlobalScope": false
      },
      "./src/filenotfound.ts": {
        "version": "-497034637-export function something2() { return 20; }",
        "signature": "-13705775197-export declare function something2(): number;\r\n",
        "affectsGlobalScope": false
      },
      "./src/anotherfilereusingresolution.ts": {
        "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      },
      "./src/globalfilepresent.ts": {
        "version": "-5627034801-function globalSomething() { return 10; }",
        "signature": "-6032143744-declare function globalSomething(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalfilenotfound.ts": {
        "version": "-6310824062-function globalSomething2() { return 20; }",
        "signature": "-7753781454-declare function globalSomething2(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalanotherfilewithsamereferenes.ts": {
        "version": "-4448253777-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalAnotherFileWithSameReferenes() { }\n",
        "signature": "-18570932929-/// <reference path=\"globalFilePresent.d.ts\" />\r\n/// <reference path=\"globalFileNotFound.d.ts\" />\r\ndeclare function globalAnotherFileWithSameReferenes(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalnewfile.ts": {
        "version": "4916490342-function globalFoo() { return 20; }",
        "signature": "4157970454-declare function globalFoo(): number;\r\n",
        "affectsGlobalScope": true
      },
      "./src/globalmain.ts": {
        "version": "-5021007197-/// <reference path=\"./globalNewFile.ts\"/>\n/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalMain() { }\nglobalSomething();globalFoo();globalSomething();",
        "signature": "3235645566-/// <reference path=\"globalNewFile.d.ts\" />\r\n/// <reference path=\"globalFilePresent.d.ts\" />\r\n/// <reference path=\"globalFileNotFound.d.ts\" />\r\ndeclare function globalMain(): void;\r\n",
        "affectsGlobalScope": true
      },
      "./src/newfile.ts": {
        "version": "4428918903-export function foo() { return 20; }",
        "signature": "-3405156953-export declare function foo(): number;\r\n",
        "affectsGlobalScope": false
      },
      "./src/main.ts": {
        "version": "26360741061-import { foo } from \"./newFile\";import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";something();something();",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      }
    },
    "options": {
      "module": 2,
      "composite": true,
      "persistResolutions": true,
      "traceResolution": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {
      "./src/anotherfilereusingresolution.ts": [
        "./src/filenotfound.ts",
        "./src/filepresent.ts"
      ],
      "./src/globalanotherfilewithsamereferenes.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts"
      ],
      "./src/globalmain.ts": [
        "./src/globalfilenotfound.ts",
        "./src/globalfilepresent.ts",
        "./src/globalnewfile.ts"
      ],
      "./src/main.ts": [
        "./src/filenotfound.ts",
        "./src/filepresent.ts",
        "./src/newfile.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./src/anotherfilereusingresolution.ts",
      "./src/filenotfound.ts",
      "./src/filepresent.ts",
      "./src/globalanotherfilewithsamereferenes.ts",
      "./src/globalfilenotfound.ts",
      "./src/globalfilepresent.ts",
      "./src/globalmain.ts",
      "./src/globalnewfile.ts",
      "./src/main.ts",
      "./src/newfile.ts"
    ],
    "peristedProgram": {
      "files": [
        {
          "fileName": "../../lib/lib.d.ts",
          "originalFileName": "../../lib/lib.d.ts",
          "path": "../../lib/lib.d.ts",
          "resolvedPath": "../../lib/lib.d.ts",
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "flags": 0,
          "hasNoDefaultLib": true,
          "includeReasons": [
            {
              "kind": 6
            }
          ]
        },
        {
          "fileName": "./src/filePresent.ts",
          "originalFileName": "./src/filePresent.ts",
          "path": "./src/filepresent.ts",
          "resolvedPath": "./src/filepresent.ts",
          "version": "11598859296-export function something() { return 10; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 3,
              "file": "./src/anotherfilereusingresolution.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 2
            },
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 1
            },
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 2
            }
          ]
        },
        {
          "fileName": "./src/fileNotFound.ts",
          "originalFileName": "./src/fileNotFound.ts",
          "path": "./src/filenotfound.ts",
          "resolvedPath": "./src/filenotfound.ts",
          "version": "-497034637-export function something2() { return 20; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 3,
              "file": "./src/anotherfilereusingresolution.ts",
              "index": 1
            },
            {
              "kind": 0,
              "index": 1
            },
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 3
            }
          ]
        },
        {
          "fileName": "./src/anotherFileReusingResolution.ts",
          "originalFileName": "./src/anotherFileReusingResolution.ts",
          "path": "./src/anotherfilereusingresolution.ts",
          "resolvedPath": "./src/anotherfilereusingresolution.ts",
          "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
          "flags": 0,
          "imports": [
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./fileNotFound"
            }
          ],
          "resolvedModules": {
            "./filePresent": 0,
            "./fileNotFound": 1
          },
          "includeReasons": [
            {
              "kind": 0,
              "index": 0
            }
          ]
        },
        {
          "fileName": "./src/globalFilePresent.ts",
          "originalFileName": "./src/globalFilePresent.ts",
          "path": "./src/globalfilepresent.ts",
          "resolvedPath": "./src/globalfilepresent.ts",
          "version": "-5627034801-function globalSomething() { return 10; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalanotherfilewithsamereferenes.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 5
            },
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 1
            }
          ]
        },
        {
          "fileName": "./src/globalFileNotFound.ts",
          "originalFileName": "./src/globalFileNotFound.ts",
          "path": "./src/globalfilenotfound.ts",
          "resolvedPath": "./src/globalfilenotfound.ts",
          "version": "-6310824062-function globalSomething2() { return 20; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalanotherfilewithsamereferenes.ts",
              "index": 1
            },
            {
              "kind": 0,
              "index": 4
            },
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 2
            }
          ]
        },
        {
          "fileName": "./src/globalAnotherFileWithSameReferenes.ts",
          "originalFileName": "./src/globalAnotherFileWithSameReferenes.ts",
          "path": "./src/globalanotherfilewithsamereferenes.ts",
          "resolvedPath": "./src/globalanotherfilewithsamereferenes.ts",
          "version": "-4448253777-/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalAnotherFileWithSameReferenes() { }\n",
          "flags": 0,
          "referencedFiles": [
            "../../globalFilePresent.ts",
            "../../globalFileNotFound.ts"
          ],
          "includeReasons": [
            {
              "kind": 0,
              "index": 3
            }
          ]
        },
        {
          "fileName": "./src/globalNewFile.ts",
          "originalFileName": "./src/globalNewFile.ts",
          "path": "./src/globalnewfile.ts",
          "resolvedPath": "./src/globalnewfile.ts",
          "version": "4916490342-function globalFoo() { return 20; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 4,
              "file": "./src/globalmain.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 7
            }
          ]
        },
        {
          "fileName": "./src/globalMain.ts",
          "originalFileName": "./src/globalMain.ts",
          "path": "./src/globalmain.ts",
          "resolvedPath": "./src/globalmain.ts",
          "version": "-5021007197-/// <reference path=\"./globalNewFile.ts\"/>\n/// <reference path=\"./globalFilePresent.ts\"/>\n/// <reference path=\"./globalFileNotFound.ts\"/>\nfunction globalMain() { }\nglobalSomething();globalFoo();globalSomething();",
          "flags": 0,
          "referencedFiles": [
            "../../globalNewFile.ts",
            "../../globalFilePresent.ts",
            "../../globalFileNotFound.ts"
          ],
          "includeReasons": [
            {
              "kind": 0,
              "index": 6
            }
          ]
        },
        {
          "fileName": "./src/newFile.ts",
          "originalFileName": "./src/newFile.ts",
          "path": "./src/newfile.ts",
          "resolvedPath": "./src/newfile.ts",
          "version": "4428918903-export function foo() { return 20; }",
          "flags": 0,
          "includeReasons": [
            {
              "kind": 3,
              "file": "./src/main.ts",
              "index": 0
            },
            {
              "kind": 0,
              "index": 9
            }
          ]
        },
        {
          "fileName": "./src/main.ts",
          "originalFileName": "./src/main.ts",
          "path": "./src/main.ts",
          "resolvedPath": "./src/main.ts",
          "version": "26360741061-import { foo } from \"./newFile\";import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";something();something();",
          "flags": 0,
          "imports": [
            {
              "kind": 10,
              "text": "./newFile"
            },
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./filePresent"
            },
            {
              "kind": 10,
              "text": "./fileNotFound"
            }
          ],
          "resolvedModules": {
            "./newFile": 2,
            "./filePresent": 0,
            "./fileNotFound": 1
          },
          "includeReasons": [
            {
              "kind": 0,
              "index": 8
            }
          ]
        }
      ],
      "rootFileNames": [
        "./src/anotherFileReusingResolution.ts",
        "./src/fileNotFound.ts",
        "./src/filePresent.ts",
        "./src/globalAnotherFileWithSameReferenes.ts",
        "./src/globalFileNotFound.ts",
        "./src/globalFilePresent.ts",
        "./src/globalMain.ts",
        "./src/globalNewFile.ts",
        "./src/main.ts",
        "./src/newFile.ts"
      ],
      "resolutions": [
        {
          "resolvedModule": {
            "resolvedFileName": "./src/filePresent.ts",
            "extension": ".ts"
          }
        },
        {
          "resolvedModule": {
            "resolvedFileName": "./src/fileNotFound.ts",
            "extension": ".ts"
          }
        },
        {
          "resolvedModule": {
            "resolvedFileName": "./src/newFile.ts",
            "extension": ".ts"
          }
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}

