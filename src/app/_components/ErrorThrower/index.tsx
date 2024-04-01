"use client";

function index({ showBtn = true }: { showBtn: boolean }) {
  if (!showBtn) {
    throw new Error("Error from ErrorThrower component!");
  }

  if (showBtn) {
    return (
      <div>
        <button
          onClick={() => {
            throw new Error("Error from ErrorThrower component!");
          }}
          className="rounded bg-red-500 px-3 py-2 font-bold text-white hover:bg-red-700"
        >
          Throw error
        </button>
      </div>
    );
  }
}

export default index;
