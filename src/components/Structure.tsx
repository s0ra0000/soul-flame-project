"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { useSpring, animated } from "@react-spring/web";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { TransitionProps } from "@mui/material/transitions";
import Collapse from "@mui/material/Collapse";
import { alpha, styled } from "@mui/material/styles";
import { TreeView } from "@mui/x-tree-view/TreeView";
import {
  TreeItem,
  TreeItemProps,
  treeItemClasses,
} from "@mui/x-tree-view/TreeItem";
import Link from "next/link";

const Structure = () => {
  function MinusSquare(props: SvgIconProps) {
    return (
      <SvgIcon fontSize="inherit" style={{ width: 20, height: 20 }} {...props}>
        {/* tslint:disable-next-line: max-line-length */}
        <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
      </SvgIcon>
    );
  }

  function PlusSquare(props: SvgIconProps) {
    return (
      <SvgIcon fontSize="inherit" style={{ width: 20, height: 20 }} {...props}>
        {/* tslint:disable-next-line: max-line-length */}
        <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
      </SvgIcon>
    );
  }

  function CloseSquare(props: SvgIconProps) {
    return (
      <SvgIcon
        className="close"
        fontSize="inherit"
        style={{ width: 20, height: 20 }}
        {...props}
      >
        {/* tslint:disable-next-line: max-line-length */}
        <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
      </SvgIcon>
    );
  }

  function TransitionComponent(props: TransitionProps) {
    const style = useSpring({
      to: {
        opacity: props.in ? 1 : 0,
        transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
      },
    });

    return (
      <animated.div style={style}>
        <Collapse {...props} />
      </animated.div>
    );
  }

  const CustomTreeItem = React.forwardRef(
    (props: TreeItemProps, ref: React.Ref<HTMLLIElement>) => (
      <TreeItem
        {...props}
        TransitionComponent={TransitionComponent}
        ref={ref}
      />
    )
  );
  CustomTreeItem.displayName = "TreeItem";

  const StyledTreeItem = styled(CustomTreeItem)(({ theme }) => ({
    [`& .${treeItemClasses.iconContainer}`]: {
      "& .close": {
        opacity: 0.3,
      },
    },
    [`& .${treeItemClasses.group}`]: {
      marginLeft: 15,
      paddingLeft: 18,
      borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
    },
    "& .label-1": {
      fontSize: 20,
      fontWeight: 700,
      marginLeft: 10,
    },
    "& .label": {
      fontSize: 20,
      marginLeft: 10,
    },
  }));

  // const [checked, setChecked] = useState<boolean>(false);
  // const [opened, setOpened] = useState<Array<string>>(["1"]);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setChecked(event.target.checked);
  // };

  // useEffect(() => {
  //   if (checked) {
  //     setOpened(
  //       Array.from({ length: 100 }, (_, index) => (index + 1).toString())
  //     );
  //   } else {
  //     setOpened(["1"]);
  //   }
  // }, [checked]);

  return (
    <section className="h-full w-full bg-bg-4 text-black flex justify-center items-center py-16">
      <div className="w-[1200px] h-full">
        <div className="flex flex-row justify-between gap-x-10 my-4">
          <h1 className="block text-black font-black px-4 py-2 rounded-lg text-2xl">
            Структура веб-приложения{" "}
            <span className="bg-gradient-to-r from-[#20d0d9] to-[#ef6e28] bg-clip-text text-transparent">
              &quot;SoulFlare&quot;
            </span>
          </h1>
          <Link
            href="https://www.figma.com/file/hfDcvSCC0tJiWqiTaIoufL/Soul-Flare?type=design&mode=design&t=MbssozdaPdEaqTfQ-1"
            target="_blank"
          >
            <button className="block bg-primary text-white px-4 py-2 rounded-lg">
              Open in Figma
            </button>
          </Link>
        </div>
        {/* <div className="flex items-center">
          <Switch
            // checked={isAllOpened}
            // onChange={handleToggleAll}
            inputProps={{ "aria-label": "controlled" }}
          />
          <p className="">Open all</p>
        </div> */}
        <div className="w-full flex justify-between text-3xl">
          <Box
            sx={{ minHeight: 270, flexGrow: 1, maxWidth: 600, fontSize: 36 }}
          >
            <TreeView
              aria-label="customized"
              defaultExpanded={["1"]}
              onNodeSelect={() => {}}
              defaultCollapseIcon={<MinusSquare />}
              defaultExpandIcon={<PlusSquare />}
              defaultEndIcon={<CloseSquare />}
              sx={{ overflowX: "hidden" }}
            >
              <StyledTreeItem
                nodeId="1"
                label="Soul Flare"
                classes={{ label: "label-1" }}
              >
                <StyledTreeItem
                  nodeId="2"
                  label="Home Page"
                  classes={{ label: "label" }}
                >
                  <StyledTreeItem
                    nodeId="8"
                    label="Navbar"
                    classes={{ label: "label" }}
                  ></StyledTreeItem>
                  <StyledTreeItem
                    nodeId="11"
                    label="Hero Section"
                    classes={{ label: "label" }}
                  >
                    <StyledTreeItem
                      nodeId="12"
                      label="Greetings and Description "
                      classes={{ label: "label" }}
                    />
                    <StyledTreeItem
                      nodeId="13"
                      label="Login Button (Navigate to Login Page) "
                      classes={{ label: "label" }}
                    />
                    <StyledTreeItem
                      nodeId="14"
                      label="Sign Up Button (Navigate to Sign Up Page) "
                      classes={{ label: "label" }}
                    />
                    <StyledTreeItem
                      nodeId="15"
                      label="Image "
                      classes={{ label: "label" }}
                    />
                  </StyledTreeItem>
                  <StyledTreeItem
                    nodeId="16"
                    label="Container of Featured Tests"
                    classes={{ label: "label" }}
                  >
                    <StyledTreeItem
                      nodeId="17"
                      label="Header text"
                      classes={{ label: "label" }}
                    />
                    <StyledTreeItem
                      nodeId="18"
                      label=" List of tests"
                      classes={{ label: "label" }}
                    >
                      <StyledTreeItem
                        nodeId="20"
                        label="Test Card"
                        classes={{ label: "label" }}
                      />
                    </StyledTreeItem>
                    <StyledTreeItem
                      nodeId="19"
                      label="Browse more Button (Navigate to TestList Page) "
                      classes={{ label: "label" }}
                    />
                  </StyledTreeItem>
                  <StyledTreeItem
                    nodeId="19"
                    label="Footer"
                    classes={{ label: "label" }}
                  />
                </StyledTreeItem>
                <StyledTreeItem
                  nodeId="90"
                  label="Test List Page"
                  classes={{ label: "label" }}
                >
                  <StyledTreeItem
                    nodeId="91"
                    label="Navbar"
                    classes={{ label: "label" }}
                  />
                  <StyledTreeItem
                    nodeId="93"
                    label="Filter and Sort Section"
                    classes={{ label: "label" }}
                  >
                    <StyledTreeItem
                      nodeId="94"
                      label="Sort"
                      classes={{ label: "label" }}
                    />
                    <StyledTreeItem
                      nodeId="95"
                      label="Filter By Types"
                      classes={{ label: "label" }}
                    />
                  </StyledTreeItem>
                  <StyledTreeItem
                    nodeId="96"
                    label="List Test Container"
                    classes={{ label: "label" }}
                  >
                    <StyledTreeItem
                      nodeId="97"
                      label="Test Card Component"
                      classes={{ label: "label" }}
                    />
                  </StyledTreeItem>
                  <StyledTreeItem
                    nodeId="92"
                    label="Footer"
                    classes={{ label: "label" }}
                  />
                </StyledTreeItem>
                <StyledTreeItem
                  nodeId="3"
                  label="Test Page"
                  classes={{ label: "label" }}
                >
                  <StyledTreeItem
                    nodeId="36"
                    label="Navbar"
                    classes={{ label: "label" }}
                  />
                  <StyledTreeItem
                    nodeId="24"
                    label="Test Starting Component"
                    classes={{ label: "label" }}
                  >
                    <StyledTreeItem
                      nodeId="25"
                      label="Title and Type"
                      classes={{ label: "label" }}
                    />
                    <StyledTreeItem
                      nodeId="26"
                      label="Description"
                      classes={{ label: "label" }}
                    />
                    <StyledTreeItem
                      nodeId="27"
                      label="Instruction of test"
                      classes={{ label: "label" }}
                    />
                    <StyledTreeItem
                      nodeId="28"
                      label="Start Test Button (Call Test Process Component)"
                      classes={{ label: "label" }}
                    />
                  </StyledTreeItem>
                  <StyledTreeItem
                    nodeId="34"
                    label="Test Process Component"
                    classes={{ label: "label" }}
                  >
                    <StyledTreeItem
                      nodeId="29"
                      label="Title and Type"
                      classes={{ label: "label" }}
                    />
                    <StyledTreeItem
                      nodeId="30"
                      label="Question Component"
                      classes={{ label: "label" }}
                    >
                      <StyledTreeItem
                        nodeId="32"
                        label="Question"
                        classes={{ label: "label" }}
                      />
                      <StyledTreeItem
                        nodeId="33"
                        label="Choose Answer (Radio Input)"
                        classes={{ label: "label" }}
                      />
                    </StyledTreeItem>

                    <StyledTreeItem
                      nodeId="31"
                      label="End Test Button (Navigate to Result Page)"
                      classes={{ label: "label" }}
                    />
                  </StyledTreeItem>
                  <StyledTreeItem
                    nodeId="37"
                    label="Footer"
                    classes={{ label: "label" }}
                  />
                </StyledTreeItem>
                <StyledTreeItem
                  nodeId="4"
                  label="Result Page"
                  classes={{ label: "label" }}
                >
                  <StyledTreeItem
                    nodeId="38"
                    label="Navbar"
                    classes={{ label: "label" }}
                  />
                  <StyledTreeItem
                    nodeId="40"
                    label="Result Container"
                    classes={{ label: "label" }}
                  >
                    <StyledTreeItem
                      nodeId="41"
                      label="Result Section"
                      classes={{ label: "label" }}
                    />
                    <StyledTreeItem
                      nodeId="42"
                      label="Result Section"
                      classes={{ label: "label" }}
                    />
                  </StyledTreeItem>
                  <StyledTreeItem
                    nodeId="43"
                    label="Share & Save Container"
                    classes={{ label: "label" }}
                  >
                    <StyledTreeItem
                      nodeId="44"
                      label="Save Section"
                      classes={{ label: "label" }}
                    />
                    <StyledTreeItem
                      nodeId="45"
                      label="Share Section"
                      classes={{ label: "label" }}
                    />
                  </StyledTreeItem>
                  <StyledTreeItem
                    nodeId="39"
                    label="Footer"
                    classes={{ label: "label" }}
                  />
                </StyledTreeItem>
                <StyledTreeItem
                  nodeId="5"
                  label="Profile Page"
                  classes={{ label: "label" }}
                >
                  <StyledTreeItem
                    nodeId="46"
                    label="Navbar"
                    classes={{ label: "label" }}
                  />
                  <StyledTreeItem
                    nodeId="48"
                    label="Profile Section"
                    classes={{ label: "label" }}
                  >
                    <StyledTreeItem
                      nodeId="49"
                      label="Profile Picture"
                      classes={{ label: "label" }}
                    />
                    <StyledTreeItem
                      nodeId="50"
                      label="Personal Information Section"
                      classes={{ label: "label" }}
                    />
                  </StyledTreeItem>
                  <StyledTreeItem
                    nodeId="51"
                    label="Result of Tests Container"
                    classes={{ label: "label" }}
                  >
                    <StyledTreeItem
                      nodeId="52"
                      label="Result Card"
                      classes={{ label: "label" }}
                    />
                  </StyledTreeItem>
                  <StyledTreeItem
                    nodeId="37"
                    label="Footer"
                    classes={{ label: "label" }}
                  />
                </StyledTreeItem>
                <StyledTreeItem
                  nodeId="6"
                  label="Login Page"
                  classes={{ label: "label" }}
                >
                  <StyledTreeItem
                    nodeId="53"
                    label="Navbar"
                    classes={{ label: "label" }}
                  />
                  <StyledTreeItem
                    nodeId="64"
                    label="Login Container"
                    classes={{ label: "label" }}
                  >
                    <StyledTreeItem
                      nodeId="55"
                      label="Logo"
                      classes={{ label: "label" }}
                    />
                    <StyledTreeItem
                      nodeId="56"
                      label="Login with Gmail Button (Navigate to Gmail Window)"
                      classes={{ label: "label" }}
                    />
                    <StyledTreeItem
                      nodeId="57"
                      label="Login Form"
                      classes={{ label: "label" }}
                    >
                      <StyledTreeItem
                        nodeId="58"
                        label="Email Input"
                        classes={{ label: "label" }}
                      />
                      <StyledTreeItem
                        nodeId="59"
                        label="Password Input"
                        classes={{ label: "label" }}
                      />
                      <StyledTreeItem
                        nodeId="60"
                        label="Remember me & Forgot Password Section"
                        classes={{ label: "label" }}
                      />
                      <StyledTreeItem
                        nodeId="61"
                        label="Login Button (Navigate to Home Page)"
                        classes={{ label: "label" }}
                      />
                    </StyledTreeItem>
                    <StyledTreeItem
                      nodeId="62"
                      label="Navigation to Sign Up"
                      classes={{ label: "label" }}
                    />
                  </StyledTreeItem>
                  <StyledTreeItem
                    nodeId="54"
                    label="Footer"
                    classes={{ label: "label" }}
                  />
                </StyledTreeItem>
                <StyledTreeItem
                  nodeId="7"
                  label="Sign-up Page"
                  classes={{ label: "label" }}
                >
                  <StyledTreeItem
                    nodeId="65"
                    label="Navbar"
                    classes={{ label: "label" }}
                  />
                  <StyledTreeItem
                    nodeId="66"
                    label="Sign Up Container"
                    classes={{ label: "label" }}
                  >
                    <StyledTreeItem
                      nodeId="67"
                      label="Logo"
                      classes={{ label: "label" }}
                    />
                    <StyledTreeItem
                      nodeId="68"
                      label="Sign Up with Gmail Button (Navigate to Gmail Window)"
                      classes={{ label: "label" }}
                    />
                    <StyledTreeItem
                      nodeId="68"
                      label="Sign Up Form"
                      classes={{ label: "label" }}
                    >
                      <StyledTreeItem
                        nodeId="69"
                        label="Email Input"
                        classes={{ label: "label" }}
                      />
                      <StyledTreeItem
                        nodeId="70"
                        label="Password Input"
                        classes={{ label: "label" }}
                      />
                      <StyledTreeItem
                        nodeId="71"
                        label="Repeat Password Input"
                        classes={{ label: "label" }}
                      />
                      <StyledTreeItem
                        nodeId="72"
                        label="Sign Up Button (Navigate to Home Page)"
                        classes={{ label: "label" }}
                      />
                    </StyledTreeItem>
                    <StyledTreeItem
                      nodeId="73"
                      label="Navigation to Login"
                      classes={{ label: "label" }}
                    />
                  </StyledTreeItem>
                  <StyledTreeItem
                    nodeId="74"
                    label="Footer"
                    classes={{ label: "label" }}
                  />
                </StyledTreeItem>
              </StyledTreeItem>
            </TreeView>
          </Box>
          <Box
            sx={{ minHeight: 270, flexGrow: 1, maxWidth: 500, fontSize: 36 }}
          >
            <TreeView
              aria-label="customized"
              defaultExpanded={["500"]}
              defaultCollapseIcon={<MinusSquare />}
              defaultExpandIcon={<PlusSquare />}
              defaultEndIcon={<CloseSquare />}
              sx={{ overflowX: "hidden" }}
            >
              <StyledTreeItem
                nodeId="500"
                label="Reusable Components"
                classes={{ label: "label-1" }}
              >
                <StyledTreeItem
                  nodeId="501"
                  label="Navbar"
                  classes={{ label: "label-1" }}
                >
                  <StyledTreeItem
                    nodeId="511"
                    label="Logo Button (Navigate to Home)"
                    classes={{ label: "label" }}
                  />
                  <StyledTreeItem
                    nodeId="512"
                    label="Search Bar (Navigate to Test List Page)"
                    classes={{ label: "label" }}
                  />
                  <StyledTreeItem
                    nodeId="513"
                    label="Profile Button (Navigate to Profile)"
                    classes={{ label: "label" }}
                  />
                </StyledTreeItem>
                <StyledTreeItem
                  nodeId="502"
                  label="Footer"
                  classes={{ label: "label-1" }}
                ></StyledTreeItem>
                <StyledTreeItem
                  nodeId="504"
                  label="Test Card"
                  classes={{ label: "label-1" }}
                >
                  <StyledTreeItem
                    nodeId="21"
                    label=" Name and Type of Test"
                    classes={{ label: "label" }}
                  />
                  <StyledTreeItem
                    nodeId="22"
                    label=" Description of Test"
                    classes={{ label: "label" }}
                  />
                  <StyledTreeItem
                    nodeId="23"
                    label="Start Test Button (Navigate to Test Page)"
                    classes={{ label: "label" }}
                  />
                </StyledTreeItem>
                <StyledTreeItem
                  nodeId="505"
                  label="Result Card"
                  classes={{ label: "label-1" }}
                ></StyledTreeItem>
              </StyledTreeItem>
            </TreeView>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default Structure;
