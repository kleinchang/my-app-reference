interface ChildProps {
  color: string
}

export const ChildAsFC: React.FunctionComponent<ChildProps> = ({ color }) => {
  return <div>{color}</div>
}