import { GroupContainer, Input, Label } from "./styled";

export const FormInput = ({ label, ...otherProps }) => (
  <GroupContainer>
    <Input {...otherProps} />
    {label ? (
      <Label className={otherProps.value.length ? `shrink-label` : ""}>
        {label}
      </Label>
    ) : null}
  </GroupContainer>
);
