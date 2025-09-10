import { type Suspect__Avatar__output_type } from '../../Suspect/Avatar/output_type';

export type Suspect__TitleCard__param = {
  readonly data: {
    /**
Their official name, likely an alias like "Barnaby Buttercup."
    */
    readonly suspectName: string,
    /**
What they do for a living. Could be a professional napper or an artisanal cheese smuggler.
    */
    readonly jobTitle: string,
    /**
The name of their business. "Totally Legitimate Enterprises, Inc." is a common one.
    */
    readonly businessName: string,
    /**
The digital trail of angry customers. From "my pizza was cold" to "he stole my identity and my dog."
    */
    readonly customerComplaints: string,
    readonly Avatar: Suspect__Avatar__output_type,
  },
  readonly parameters: Record<PropertyKey, never>,
};
