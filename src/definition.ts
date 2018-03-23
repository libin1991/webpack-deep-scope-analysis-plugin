import { VariableType } from './variable';

export class Definition {

  constructor(
    public type: VariableType,
    public name: any, 
    public node: any,
    public parent: Definition | null = null,
    public index: number | undefined = null,
    public kind: string | null = null
  ) { }

}

export class ParameterDefinition extends Definition {

  public rest: boolean;

  constructor(name, node, index, rest) {
    super(VariableType.Parameter, name, node, null, index, null);

    /**
     * Whether the parameter definition is a part of a rest parameter.
     * @member {boolean} ParameterDefinition#rest
     */
    this.rest = rest;
  }

}