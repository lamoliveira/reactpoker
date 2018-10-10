import React from 'react';
import { Input, TextArea, FormBtn } from "../components/Form";

const EditTournament = ({ tournamentid, tournamentname, tournamentdate, tournamentrules, handleChange, handleSubmit }) => (
    <form>
            <Input
                value={tournamentid}
                name="tournamentid"
                placeholder="id"
                readOnly
              />
              <Input
                value={tournamentname}
                onChange={handleChange}
                name="tournamentname"
                placeholder="Tournament Name (required)"
              />
              <Input
                value={tournamentdate}
                onChange={handleChange}
                name="tournamentdate"
                placeholder="Tournament Date (required)"
              />
              <TextArea
                value={tournamentrules}
                onChange={handleChange}
                name="tournamentrules"
                placeholder="Tournament Rules (Optional)"
              />
              <FormBtn
                disabled={!(tournamentname)}
                onClick={handleSubmit}
              >
                Submit Tournament
              </FormBtn>
            </form>
);

export default EditTournament;