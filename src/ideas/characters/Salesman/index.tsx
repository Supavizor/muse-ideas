import { Spinning } from "spacesvr";
import { GroupProps } from "@react-three/fiber";

type SalesmanProps = {
  color?: string;
} & GroupProps;

export default function Salesman(props: SalesmanProps) {
  const { color = "white", ...rest } = props;

  return (
    <group name="Salesman" {...rest}>
      <Spinning>
        <mesh>
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </Spinning>
    </group>
  );
}
