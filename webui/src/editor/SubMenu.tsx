import React from "react";
import {IconButton, Tooltip } from "@mui/material";
import {Download, Image, Link, UploadFile} from "@mui/icons-material";
import {downloadPngFromCanvas} from "../pflow/snapshot";
import {FileUploader} from "react-drag-drop-files";
import {downloadModelJson} from "../pflow/export";
import ShareDialog from "./ShareDialog";
import {MetaModel} from "../pflow";
import ImportContract from "./ImportContract";

interface SubMenuProps {
    metaModel: MetaModel
}
export default function SubMenu(props: SubMenuProps) {
    const metaModel = props.metaModel;

    const handleFile = async (file: File) => {
        return metaModel.uploadFile(file).then(async () => {
            await metaModel.menuAction("select");
            return metaModel.update();
        })
    };

    async function createPngLink() {
        if (metaModel.mode !== "snapshot") {
            await metaModel.menuAction("snapshot")
        }
        downloadPngFromCanvas()
    }


    const color = "#3143a9";
    return <React.Fragment>
        <FileUploader sx={{color}} handleChange={handleFile} types={["JSON"]}>
            <Tooltip title="import json">
                <IconButton sx={{color}} aria-label="upload json">
                    <UploadFile/>
                </IconButton>
            </Tooltip>
        </FileUploader>
        <select value={metaModel.m.def.type} onChange={async (e) => {
            await metaModel.setModelType(e.target.value as any)
        }}>
            <option value="petriNet">PetriNet</option>
            <option value="workflow">Workflow</option>
            <option value="elementary">Elementary</option>
        </select>
        &nbsp;
        <button style={{border: "none"}} onClick={() => metaModel.revert(metaModel.revision - 1)}>{"<"}</button>
        <button style={{border: "none"}}> rev. {metaModel.revision}</button>
        <button style={{border: "none"}} onClick={() => metaModel.revert(metaModel.revision + 1)}>{">"}</button>
        <Tooltip title="All submitted software & models are shared under 'The Unlicense'">
            <a style={{color: "black"}} id="submittedDataLicense" href={"/p/UNLICENSE.txt"} target="_blank"
               rel="noreferrer">
                <IconButton sx={{color}} aria-label="permalink" color="secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 5.292 5.292">
                        <path fill={color}
                              d="M128.355 137.62c-.339.016-.426.305-.432.44h-.473c.021-.524.394-.844.913-.844.584 0 1.018.367 1.018 1.198 0 .513-.246 1.122-1.016 1.122-.587 0-.902-.437-.91-.78h.474c.008.156.119.365.431.38.347-.01.492-.28.492-.722 0-.765-.339-.788-.497-.794m-.032-1.889a2.647 2.647 0 0 1 0 5.292 2.647 2.647 0 0 1 0-5.292m0 4.763a2.12 2.12 0 0 0 2.117-2.117 2.12 2.12 0 0 0-2.117-2.117 2.12 2.12 0 0 0-2.117 2.117 2.12 2.12 0 0 0 2.117 2.117"
                              transform="translate(-125.677 -135.731)"/>
                    </svg>
                </IconButton>
            </a>
        </Tooltip>
        <Tooltip title="export json">
            <IconButton sx={{color}} aria-label="download json" onClick={
                () => downloadModelJson(metaModel.toJson())
            }><Download/>
            </IconButton>
        </Tooltip>
        <Tooltip title="snapshot png">
            <IconButton sx={{color}} aria-label="snapshot" color="secondary" onClick={
                () => createPngLink()
            }><Image/>
            </IconButton>
        </Tooltip>
        <Tooltip title="permalink">
            <a id="permalink" href={"/p/?z=" + metaModel.zippedJson}>
                <IconButton sx={{color}} aria-label="permalink" color="secondary">
                    <Link/>
                </IconButton>
            </a>
        </Tooltip>
            <Tooltip title={"share in markdown"}>
                <IconButton sx={{color}} aria-label="share" color="secondary">
                <ShareDialog/>
            </IconButton>
        </Tooltip>
        <Tooltip title={"export to .sol / open in remix"}>
            <IconButton sx={{color}} aria-label="export to .sol / open in remix" color="secondary">
                <svg width="22" height="22" viewBox="0 0 215.635 196.585">
                    <g transform={"translate(0, -60)"}>
                    <path d="M40.58 204.628c-14.434-18.751-26.214-34.13-26.179-34.175.036-.045 1.411.654 3.057 1.553l26.18 14.3 23.187 12.664 21.52-11.75a25076.33 25076.33 0 0 0 26.073-14.247c2.504-1.375 4.587-2.469 4.629-2.432.041.037-11.692 15.393-26.075 34.124l-26.15 34.056zm48.72 33.42c.091-.15 4.325-6.244 9.408-13.544l24.5-35.189 15.257-21.916v-23.86l-7.316-11.528c-4.024-6.34-14.86-23.422-24.082-37.958a37612.645 37612.645 0 0 0-17.139-27.005c-.314-.485-.317-.542-.023-.364.193.117 18.315 14.315 40.272 31.551 21.957 17.237 47.246 37.082 56.197 44.101 8.952 7.02 16.28 12.832 16.284 12.918.004.086-5.218 3.975-11.606 8.642a80324.547 80324.547 0 0 0-30.408 22.222c-28.408 20.78-70.927 51.84-71.184 51.997-.224.14-.275.118-.16-.068m-24.492-63.05c-1.027-.563-12.899-7.044-26.381-14.403-13.483-7.358-24.542-13.406-24.577-13.439-.035-.033 4.123-6.469 9.24-14.302 5.117-7.834 15.006-22.979 21.976-33.656C65.979 67.16 66.67 66.108 66.819 66.105c.078 0 11.99 18.215 26.47 40.48 21.966 33.777 26.274 40.532 26.004 40.779-.368.338-52.222 28.67-52.461 28.663-.086-.003-.997-.465-2.024-1.028" />
                    </g>
                </svg>
            </IconButton>
        </Tooltip>

        <ImportContract metaModel={metaModel}/>
    </React.Fragment>;
}
